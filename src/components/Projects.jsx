function Projects() {
  return (
    <>
      <div className="text-left p-10 w-screen text-black h-fit bg-slate-300 mt-5">
        <h1 className="text-3xl mb-6 mt-3">
          <u>Projects</u>
        </h1>
        <div className="text-2xl mb-4">
          Network Intrusion Detection System-
          <i className="text-lg italic font-bold">(04/2024-Present)</i>
          <div className="italic font-normal text-lg">
            -This project is aimed to detect and respond to network intrusion.
            It will help to detect any anomalies behaviour. Prevent any
            unauthorized access to the network
            <div className="text-lg font-bold">
              Tech Stack – Flask, Machine Learning, Python, scikit-learn.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-between max-w-custom-1">
          <div className="text-2xl mb-4 ">
            Blood Unity App using Kotlin-
            <i className="text-lg italic font-bold ">(08/2022 – 03/2023)</i>
            <div className="italic font-normal  text-lg">
              -This Kotlin-based Blood Donation Android App locates available
              blood groups nearby, featuring Google Maps integration,
              authentication, chat, alerts, and notifications for immediate
              assistance.
              <div className=" text-lg font-bold">
                Tech Stack –Kotlin, WebSocket, Firebase.
              </div>
            </div>
          </div>
          
          <video width={120} style={{'height':'200px'}}autoPlay muted loop>
            <source src="/static/images/video.mp4" type="video/mp4" />
          </video>
          
        </div>
        <div className="text-2xl mb-4">
          Elearning App–
          <i className="text-lg italic font-bold">(01/2024 – Present)</i>
          <div className="italic font-normal text-lg">
            -This is the Elearning Web Application which consists of features
            like authentication, Quizzes, Generative AI, Real time Chat
            Application, Payment Gateway etc.{" "}
            <div className="text-lg font-bold">
              Tech Stack - Spring Boot, MYSQL, WebSocket, ReactJs, Tailwind CSS,
              JavaScript
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
