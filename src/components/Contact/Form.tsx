import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `Hello, my name is ${input.name}.
   Email: ${input.email}
   Phone: ${input.phone}
    Message: ${input.desc}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/7708927972?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }

  function handleMapclick() {
    const mapURL = "https://maps.app.goo.gl/FBcD6WucasEiyfpU8";
    window.open(mapURL, "_blank");
  }

  return (
    <>
      <h1 className="text-[clamp(1.9rem,2.4vw,4rem)] text-center my-8">
        Contact us
      </h1>
      <div className="max-w-[700px] mx-auto shadow-lg border mt-10 flex rounded-xl gap-10">
        <form className="flex flex-col gap-3 p-8 " onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            onChange={handleInputChange}
            name="name"
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            name="email"
            required
          />
          <Input
            label="Phone"
            type="number"
            placeholder="Enter your number"
            onChange={handleInputChange}
            name="phone"
          />
          {input.phone.length > 0 && input.phone?.length >= 10 && (
            <p>phone should contain 10 digits</p>
          )}

          <div className="grid gap-2 ">
            <label htmlFor="area">Message</label>
            <textarea
              onChange={handleInputChange}
              name="desc"
              id="area"
              rows={4}
              className=" w-[min(300px,90vw)] outline-none border border-gray-400 rounded-lg pl-3"
              placeholder="Please enter your message"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>

        <div className="bg-rose-200 text-gray-700 py-8 px-14 rounded-lg">
          <h2 className="text-[clamp(1.4rem,1.9vw,3rem)] text-nowrap">
            Contact Information
          </h2>
          <span>Say something to start a live chat</span>

          <div className="grid mt-16 gap-6">
            <div className="flex gap-2 ">
              <LocalPhoneIcon />
              <span className="hover:underline">
                <a href="tel:08668079374">08668079374</a>
              </span>
            </div>
            <div className="flex gap-2">
              <EmailIcon />
              <span className="hover:underline">
                <a href="mailto:Safiyasekar87@gmail.com">
                  Safiyasekar87@gmail.com
                </a>
              </span>
            </div>
            <div
              className="flex gap-2 hover:cursor-pointer hover:underline"
              onClick={handleMapclick}
            >
              <LocationOnIcon />
              <p className="grid uppercase">
                <span>Safiya&apos;s makeover</span>
                <span className="text-nowrap ">
                  333, Bharathi St, MG Road Area,
                  <br /> Puducherry, 605001.
                </span>
                <span>Tamil nadu 629810</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.590284531253!2d79.82698239999999!3d11.9335759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361f045bc69fd%3A0x46d973f4f7a62fc4!2sSafiya%E2%80%99s%20makeover%20%7C%20Best%20Makeup%20Artist%20in%20Pondicherry%20%7C%20Bridal%20Makeup%20Artist%20in%20Pondicherry%20%7C%20Makeup%20Artist%20in%20Pondicherry!5e0!3m2!1sen!2sin!4v1734689802645!5m2!1sen!2sin"
          loading="lazy"
          className="w-[80%] h-[600px] mx-auto py-[3rem] rounded-sm"
        />
      </div>
    </>
  );
}

type Props = {
  label: string;
  type: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
};

function Input({ label, onChange, ...props }: Props) {
  return (
    <div className="grid ">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={onChange}
        {...props}
        className="border-b border-gray-400 w-[min(300px,90vw)] pl-2"
        maxLength={10}
      />
    </div>
  );
}
