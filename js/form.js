/*
 * "Request A Free Quote" form.
 *
 * The original form was a SureForms (WordPress plugin) form that posted to
 * https://modernplumber.online/wp-json/sureforms/v1/submit-form with a
 * per-session WordPress nonce. A static site cannot reproduce that, so:
 *
 *   1. If the <form> has a data-endpoint attribute, the fields are POSTed there
 *      (e.g. Formspree, Getform, or your own backend).
 *   2. Otherwise the enquiry is handed to WhatsApp (the site's existing
 *      click-to-chat number) with every field pre-filled in the message.
 *
 * Validation messages are the ones used by the original form.
 */
(function () {
  "use strict";

  var MSG = {
    required: "This field is required.",
    email: "Enter a valid email address.",
    phone: "Enter a valid phone number."
  };
  var WHATSAPP_NUMBER = "919893336838";

  document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
    var headError = form.querySelector("[data-form-error]");
    var fields = Array.prototype.slice.call(form.querySelectorAll(".field"));

    function control(field) { return field.querySelector("input, select, textarea"); }

    function validate(field) {
      var el = control(field);
      var errorEl = field.querySelector(".field__error");
      var value = el.value.trim();
      var message = "";

      if (el.required && !value) message = MSG.required;
      else if (value && el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = MSG.email;
      else if (value && el.type === "tel" && !/^\+?[\d\s()-]{7,20}$/.test(value)) message = MSG.phone;

      field.classList.toggle("has-error", Boolean(message));
      el.setAttribute("aria-invalid", message ? "true" : "false");
      if (errorEl) errorEl.textContent = message || MSG.required;
      return !message;
    }

    fields.forEach(function (field) {
      var el = control(field);
      if (!el) return;
      el.addEventListener("blur", function () { if (el.value.trim() || field.classList.contains("has-error")) validate(field); });
      el.addEventListener("input", function () { if (field.classList.contains("has-error")) validate(field); });
      el.addEventListener("change", function () { if (field.classList.contains("has-error")) validate(field); });
    });

    function collect() {
      return fields.map(function (field) {
        var label = field.querySelector("label, .field__label");
        var el = control(field);
        var value = el.tagName === "SELECT" && !el.value ? "" : el.value.trim();
        return { label: label ? label.firstChild.textContent.trim() : el.name, name: el.name, value: value };
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (headError) headError.hidden = true;

      var firstInvalid = null;
      fields.forEach(function (field) {
        if (!validate(field) && !firstInvalid) firstInvalid = control(field);
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      var data = collect();
      var endpoint = form.getAttribute("data-endpoint");
      var submit = form.querySelector('[type="submit"]');

      if (endpoint) {
        var body = new FormData();
        data.forEach(function (d) { body.append(d.name, d.value); });
        submit.disabled = true;
        fetch(endpoint, { method: "POST", body: body, headers: { Accept: "application/json" } })
          .then(function (res) {
            if (!res.ok) throw new Error(res.status);
            form.reset();
          })
          .catch(function () { if (headError) headError.hidden = false; })
          .then(function () { submit.disabled = false; });
        return;
      }

      var text = data
        .filter(function (d) { return d.value; })
        .map(function (d) { return d.label + ": " + d.value; })
        .join("\n");
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
      var win = window.open(url, "_blank");
      if (win) win.opener = null;
      else window.location.href = url; // pop-up blocked: open in this tab instead
    });
  });
})();
