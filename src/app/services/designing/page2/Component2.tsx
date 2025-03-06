import { Lightbulb, SignalCellularAlt } from "@mui/icons-material";

export default function CoreValue() {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24">
      {/* Main div */}
      <div className="max-w-6xl mx-auto flex flex-col  md:flex-row gap-4 ">
        {/* Left div */}
        <div className="flex flex-col md:w-1/2 md:mr-8">
          {/* Heading */}
          <h2 className="text-sky-500 text-3xl md:text-4xl font-bold uppercase">
            Why Choose Us?{" "}
          </h2>

          {/* Subheading */}
          <h3 className="text-2xl md:text-3xl font-semibold mt-4">
            Expertise In Designing with All Industries
          </h3>
          <p className="text-gray-600 mt-4 md:max-w-3xl">
            At PribhayTech, we design for things other than that which is
            pretty—functional, memorable, and in line with your business goals.
            Our designers are highly skilled and take great care to understand
            what you want before bringing it to fruition. This ensures that
            every project we complete reflects your brand and connects with your
            audience. It is not designed for relevant purposes; it is designed
            for convincing purposes. Be it your logo, website, or presentation,
            everything that comes out of our design studio is well thought out
            and serves a strategic purpose while appearing excellent.
          </p>
        </div>

        {/* Right div */}

        {/* Vision & Mission Section */}
        <div className=" flex flex-col md:w-1/2 gap-6">
          {/* Vision */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex gap-4 items-start">
            <div className="bg-sky-500 text-white p-3 rounded-lg">
              <Lightbulb fontSize="large" />
            </div>
            <div>
              <h4 className="text-sky-500 text-xl font-semibold">Vision</h4>
              <p className="text-gray-700 mt-2">
              As it has been known a picture speaks a thousand words; design helps in how your brand is seen. Website redesign, presentation, or logo designs are the skills and creativity we have to convert your ideas into reality
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex gap-4 items-start">
            <div className="bg-sky-500 text-white p-3 rounded-lg">
              <SignalCellularAlt fontSize="large" />
            </div>
            <div>
              <h4 className="text-sky-500 text-xl font-semibold">Mission</h4>
              <p className="text-gray-700 mt-2">
              At PribhayTech, we design not just for aestheticism but for performance with a mixture of both; we design with functionality working hand-in-hand with beauty. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
