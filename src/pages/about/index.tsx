

const AboutPage = () => {
  return (
    <div className="pt-12">
      <AboutPageFakeContent />
    </div>
  )
}

export default AboutPage


const AboutPageFakeContent = () =>  {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About Wellness Spa Explorer</h1>

      <p className="mb-4">
        Wellness Spa Explorer is a Single Page Application designed to help users explore a wide
        variety of fitness and wellness facilities. The database includes everything from modern
        workout zones to calming relaxation spaces such as saunas, aromatherapy rooms, and
        professionally equipped massage suites.
      </p>

      <p className="mb-4">
        This project allows me to practice frontend architecture, data fetching, state management, 
        and responsive UI design while working with a structured dataset of wellness services and spa
        facilities. It also acts as my sandbox for experimenting with filtering systems, smooth
        navigation, and user-friendly layouts.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">What’s Inside the Database?</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Strength training and cardio zones</li>
        <li>Yoga, pilates & meditation studios</li>
        <li>Professional massage & spa treatment rooms</li>
        <li>Sauna, steam & aromatherapy facilities</li>
        <li>Hydrotherapy pools and relaxation areas</li>
        <li>Nutrition and wellness consultation rooms</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Project Goals</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Practice handling structured wellness facility data</li>
        <li>Build smooth and responsive SPA layouts</li>
        <li>Implement clean filtering and search features</li>
        <li>Create reusable, scalable UI components</li>
      </ul>

      <p>
        This application is a work in progress and continues to grow as I refine features and expand
        the database while improving my full-stack development skills.
      </p>
    </div>
  );
};


