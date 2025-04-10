export default function Projects() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p>Here you can showcase your projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {[1, 2, 3].map((project) => (
            <div key={project} className="border border-gray-200 p-4 rounded-lg">
              <h2 className="text-xl font-bold">Project {project}</h2>
              <p className="mt-2">Description for project {project} using Azeret Mono.</p>
              <p className="font-inter mt-2">Project details in Inter font.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }