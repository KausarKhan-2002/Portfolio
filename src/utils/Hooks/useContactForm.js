import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState({
    text: "Sending...",
    color: "slate-600",
    icon: "/message.gif",
  });

  const messageRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) return;

    const serviceId = "service_7lk5e9a";
    const templateId = "template_mjrgw0k";
    const publicKey = "YzrpwnVbkkn3FAJr0";

    showMessage("Sending...", "slate-600", "/message.gif");
    messageRef.current.style.left = "10px"; // Slide-in effect

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        showMessage("Message sent successfully!", "green-700", "/verified.gif");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        showMessage("Internal server error!", "red-700", "/error.gif");
      });
  };

  const showMessage = (text, color, icon) => {
    setMsg({ text, color, icon });
    setTimeout(() => (messageRef.current.style.left = "-200px"), 3000);
    setTimeout(() => setMsg({ text: "Sending...", color: "slate-600", icon: "/message.gif" }), 4000);
  };

  return {
    formData,
    msgText: msg.text,
    msgColor: msg.color,
    msgIcon: msg.icon,
    handleChange,
    handleSubmit,
    messageRef,
    formRef,
  };
};

export default useContactForm;
