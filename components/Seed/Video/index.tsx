"use client"

const Video = () =>{



return (
    <div className="video relative grid text-center px-8 py-12">
    <div className="container mx-auto w-full lg:w-[1200px]">
      <h2 className="text-3xl font-semibold mb-6">
        Watch the Tree Market Open Alpha in Action!
      </h2>
      <div className="video-frame w-full sm:max-w-[480px] md:max-w-[600px] mx-auto">
        <video preload="auto" width="auto" height="auto" controls className="rounded-3xl mx-auto">
            <source src="/images/tree_alpha_demo.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  </div>
)
}

export default Video;