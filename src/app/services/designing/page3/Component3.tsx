
const Component3 = () => {
  const services = [
    {
      title: "Web Designing ",
      content: "A website is quite often seen by customers as the first impression of a brand. It is important to design a website that would really earn that first impression. We design interesting-looking websites that are functional and user-friendly, targeting your goals. From the simplest landing page to a comprehensive e-commerce site, we will take care of all design aspects to create your own vision of it. "
    },
    {
      title: "PPT Design ",
      content: "No matter if you are communicating to a client or an internal audience, PowerPoint presentation remains an important staple of the business. Our PPT/Animated PPT Design takes your presentations to the next level, transforming standard slides into engaging storytelling. Our team of experts will work closely with you to ensure that your audience is fully engaged and your presentation is effective."
    },
    {
      title: "Animated Design",
      content: "Custom designs, animations, and transitions give way for your presentations to stand out and arrest your audience's attention from the first slide to the last. We partner with you on projects so that your result is clarity, persuasiveness, and visual tour de force, whether you need a couple of slides or an entire deck to dazzle and engage and inform your audience"
    }, {
      title: "UI/UX Design ",
      content: "User experience and user interface design make or break your success. Our UI/UX Design services focus on creating interfaces that are very appealing visually but also intuitive and simple to use. The experiences we create meet your customers' needs while meeting the business goals whether it's an app or website. "
    },{
      title: "Logo Design ",
      content: "A logo is a Face for your brand. It is one of the first things a person will see, linking it to everything that you represent. Our logo design service creates a very unique, memorable, and perfectly aligned logo for your brand. We dig deep to learn about your brand: its values, its vision, and its target audiences. This tells us what your logo needs to be and do in order to be meaningful and effective. "
    }, {
      title: "Banner Design ",
      content: "Whether it be for your website, social media, or an advertising campaign, banner design draws attention and communicates the message. We design banners that look great and yield great results. Whether you're advertising a promotion or displaying your product, our banner designs are crafted to attract attention and encourage engagement. "
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-sky-500">Designing Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Our designers work through the design of every page and screen, where beauty meets functionality, for flawless user experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-row gap-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Concentric Circle design */}
              <div>
                <div className="w-8 h-8 border-4 border-yellow-500 rounded-full flex items-center justify-center mb-4 p-1">
                  <div className="w-3 h-3 bg-yellow-500 border-4 border-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div>
              {/* Content */}
              <h3 className="text-xl text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.content}
              </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component3;