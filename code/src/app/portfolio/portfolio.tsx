import Box from "../components/common/box";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[3%] pt-3 ">
    
      <h2 className="">Building Smart Tools for a Smarter World</h2>
      <h3 className=" mb-5 font-[200]"> Explore our portfolio of AI, apps and web innovation.</h3>
      <div className="flex flex-col md:flex-row justify-between gap-[20%] md:gap-4 lg:px-[5%]">
        {/* <div className="flex flex-col md:flex-row justify-between gap-8"> */}
        <Box
          image="/sales.svg"
          title="AI Sales Agent"
          subtitle="Embeddable Chat for your Website"
          description="Stop losing leads to late replies. Implement the SmallTech AI Sales Agent and automate 80% of your sales pipeline. "
          buttonText="Try Demo"
          onButtonClick={() => console.log("Clicked!")}
          className="w-full max-w-[350px] 
        "
        />
        <Box
          image="/app.svg"
          title="#local"
          subtitle="Coming Soon - Your City, Your Voice"
          description="It is the fastest way to report local potholes, illegal dumping, broken lights, and other civic issues directly to your local government. "
          buttonText="Download"
          onButtonClick={() => console.log("Clicked!")}
          className="w-full max-w-[350px]
        "
        />
        <Box
          image="/blog.svg"
          title="AI Blog Generator"
          subtitle="Create and publish using AI"
          description="Stop staring at a blank screen. Our AI Blog Generator turns your ideas into engaging posts."
          buttonText="Visit AI Blog"
          onButtonClick={() => console.log("Clicked!")}
          className="w-full max-w-[350px]
        "
        />
      </div>
    </div>
    
  );
}
