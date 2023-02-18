import { FaTwitter } from "react-icons/fa";

function BlogShare({ data }) {
  return (
    <>
      <div className="text-center pb-4">
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <FaTwitter />
          <a
            className="twitter-share-button"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${
              data.Title
            } by aryanstha
            &url=aryanstha.me/${String(
              data.Title.split(" ").join("-").toLowerCase()
            )}
            &hashtags=${data.Tags.split(" ")}`}
          >
            Tweet
          </a>
        </button>
      </div>
    </>
  );
}

export default BlogShare;
