
const CourseIdPage = ()=>{
  
    
    return (
      <div className="p-3 video-container flex flex-col gap-y-3">
        {/* Responsive iframe wrapper */}
        <div
          className="relative w-full"
          style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/_nF5jTNbjXM"
            title="Darulkubra video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          ;
        </div>
      </div>
    );
}
export default CourseIdPage;