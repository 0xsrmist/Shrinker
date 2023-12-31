import React from "react";
import Image from "next/image";

export default function Modal({ url }) {
  const [showModal, setShowModal] = React.useState(false);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    url
  )}`;

  const handleDownloadClick = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onload = () => {
        const base64data = reader.result;
        const link = document.createElement("a");
        link.href = base64data;
        link.download = "qr_code.png";
        link.click();
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  return (
    <>
      <button
        className="inline-block rounded-xl border border-black bg-black px-5 md:px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Generate
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-title text-white">
                    Your Generated QR Code
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* do QR logic here. Remove the span */}
                  {url == "" ? (
                    <span className="text-white mx-auto">
                      Enter a Valid URL
                    </span>
                  ) : (
                    <Image
                      src={qrCodeUrl}
                      alt="QR Code"
                      width={500}
                      height={500}
                      className="mx-auto"
                    />
                  )}
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleDownloadClick}
                  >
                    Download QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
