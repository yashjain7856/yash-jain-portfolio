export const projects = [
    {
      title: "Layout Generation and Baseline Implementation",
      description: [
        "**Built a transformer-based model** from scratch for document layout generation, achieving 80% accuracy on key performance metrics.",
        "Implemented baseline models based on the research paper _\"LayoutTransformer: Layout Generation and Completion with Self-Attention\"_ to benchmark performance.",
        "Optimized model architecture and training strategies to **improve generation quality and layout diversity**."
      ],
      tech: ["Machine Learning", "Python", "TensorFlow", "Transformer Models"],
      github: "https://github.com/Layout-Generation/layout-generation",
      live: null,
      stars: 142,
      highlight: true
    },
    {
      title: "Railway Ticket Booking System",
      description: [
        "**Developed a Railway Ticket Booking System** using Java, PostgreSQL, and multithreading.",
        "Built a client-server model where users book tickets through automated client files while the server manages concurrency and database transactions.",
        "Designed a relational database for **train scheduling and booking operations**.",
        "Ensured robust handling of simultaneous booking requests with real-time seat availability updates."
      ],
      tech: ["Java", "Multithreading", "PostgreSQL", "Client-Server Architecture", "Database Management"],
      github: "https://github.com/yashjain7856/Railway_ticket_booking_system",
      live: null,
      stars: null,
      highlight: true
    },
    {
      title: "B-- Compiler",
      description: [
        "**Built a compiler from scratch** for a simple programming language called B-- using Flex and Bison.",
        "Developed a lexical analyzer and parser capable of detecting syntax and semantic errors with detailed, meaningful error reporting.",
        "Handled complex parsing scenarios like control flow validation (_GOTO_, _GOSUB_) and maintained robust execution even after encountering errors.",
        "Implemented comprehensive error handling for **invalid line numbering**, **incorrect formatting**, and **invalid control statements**."
      ],
      tech: ["C++", "Flex and Bison", "Lexical and Syntax Analysis", "Error Handling and Debugging", "Compiler Construction"],
      github: "https://github.com/yashjain7856/B--_Compiler",
      live: null,
      stars: null,
      highlight: false
    },
    {
      title: "Prediction of EV charging costs using Machine Learning",
      description: [
        "Developed a machine learning model to **predict electric vehicle (EV) charging costs** based on solar irradiance, weather data, and grid power availability.",
        "Utilized **Extra Trees Regressor** for accurate forecasting.",
        "Integrated weather data from _OpenWeather API_ and solar irradiance data from _Ropar_.",
        "Also, generated solar panel power data from **MATLAB**."
      ],
      tech: ["Machine Learning", "Data Analysis", "Extra Trees Regressor", "API Integration (OpenWeather)", "Python", "MATLAB & Simulink"],
      github: "https://github.com/BTP-2022-23/ev-charging-estimate",
      live: null,
      stars: 3,
      highlight: false
    }
  ];
  