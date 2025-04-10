export default function About() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p>This is the about page with Azeret Mono font.</p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="mb-4">Information about you or your company.</p>
          <div className="font-inter bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-medium">This section uses Inter font</p>
            <p className="mt-2">You can see the difference between the fonts here.</p>
          </div>
        </div>
      </div>
    );
  }