import Form from "../Contact/Form";

export default function Contact() {
  return (
    <>
      <h1 className="text-[clamp(1.9rem,2.4vw,4rem)] text-center mt-2">
        Contact us
      </h1>
      <Form />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.590284531253!2d79.82698239999999!3d11.9335759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361f045bc69fd%3A0x46d973f4f7a62fc4!2sSafiya%E2%80%99s%20makeover%20%7C%20Best%20Makeup%20Artist%20in%20Pondicherry%20%7C%20Bridal%20Makeup%20Artist%20in%20Pondicherry%20%7C%20Makeup%20Artist%20in%20Pondicherry!5e0!3m2!1sen!2sin!4v1734689802645!5m2!1sen!2sin"
          loading="lazy"
          className="w-[80%] h-[600px] mx-auto my-[5rem] rounded-2xl"
        />
      </div>
    </>
  );
}
