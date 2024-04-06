interface IProps {}

const Share: React.FC<IProps> = ({}) => {
  const link = "https://hoatienoc9.web.app/";
  const handleShare = () => {
    navigator
      .share({ url: link })
      .then(() => console.log("Chia sẻ thành công!"))
      .catch((error) => console.error("Chia sẻ thất bại:", error));
  };
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Đã sao chép");
      })
      .catch((error) => {
        console.error("Lỗi khi sao chép vào clipboard: ", error);
      });
  };
  return (
    <div className="container mx-auto px-4 py-2 bg-slate-200 rounded-bl-xl rounded-br-xl md:rounded-bl-2xl md:rounded-br-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-red-500 py-2 px-4 rounded-full text-white">
          <div
            className="active:text-slate-950 text-[14px] md:text-base cursor-pointer"
            onClick={copyToClipboard}
          >
            hoatienoc.web.app
          </div>

          <div
            className="active:text-slate-950 flex cursor-pointer ml-1"
            onClick={copyToClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
        </div>

        <div
          className="active:text-slate-950 cursor-pointer"
          onClick={handleShare}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 active:text-slate-950 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Share;
