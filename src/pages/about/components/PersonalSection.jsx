import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalSection = () => {
  const interests = [
    {
      title: "Photography",
      description: "Capturing moments and exploring composition teaches me about visual design and attention to detail—skills that translate directly to UI/UX work.",
      icon: "Camera",
      image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?w=400&h=300&fit=crop"
    },
    {
      title: "Chess Strategy",
      description: "The strategic thinking and pattern recognition in chess mirror the problem-solving approaches I use in software architecture and debugging.",
      icon: "Crown",
      image: "https://images.pixabay.com/photo/2017/12/21/09/25/chess-3031503_1280.jpg?w=400&h=300&fit=crop"
    },
    {
      title: "Cooking",
      description: "Following recipes and experimenting with flavors is like coding—precision matters, but creativity makes the difference between good and great.",
      icon: "ChefHat",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      title: "Hiking",
      description: "Nature walks help me think through complex problems. Some of my best architectural decisions have come during mountain trails.",
      icon: "Mountain",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?w=400&h=300&fit=crop"
    }
  ];

  const communityActivities = [
    {
      title: "Open Source Contributions",
      description: "Active contributor to React ecosystem projects and maintainer of several utility libraries used by 1000+ developers.",
      icon: "GitBranch",
      stats: "15+ repositories"
    },
    {
      title: "Mentorship Program",
      description: "Mentor junior developers through coding bootcamps and online platforms, helping them navigate their first tech roles.",
      icon: "Users",
      stats: "25+ mentees"
    },
    {
      title: "Tech Talks",
      description: "Speaker at local meetups and conferences, sharing insights on React performance optimization and modern development practices.",
      icon: "Mic",
      stats: "8+ presentations"
    },
    {
      title: "Code Reviews",
      description: "Volunteer code reviewer for open source projects, helping maintain code quality and sharing best practices with the community.",
      icon: "Eye",
      stats: "200+ reviews"
    }
  ];

  const workspaceTools = [
    { name: "MacBook Pro M2", category: "Hardware", icon: "Laptop" },
    { name: "VS Code", category: "Editor", icon: "Code" },
    { name: "Figma", category: "Design", icon: "Palette" },
    { name: "Notion", category: "Notes", icon: "BookOpen" },
    { name: "Spotify", category: "Focus", icon: "Music" },
    { name: "Linear", category: "Tasks", icon: "CheckSquare" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Interests */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Beyond the Code
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My interests outside of programming shape how I approach problems and bring fresh perspectives to development challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {interests?.map((interest, index) => (
              <div
                key={interest?.title}
                className="bg-white rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={interest?.image}
                    alt={interest?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <Icon name={interest?.icon} size={20} className="text-violet-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {interest?.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {interest?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Involvement */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Community Involvement
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Giving back to the developer community through mentorship, open source contributions, and knowledge sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityActivities?.map((activity, index) => (
              <div
                key={activity?.title}
                className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-xl text-white">
                    <Icon name={activity?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {activity?.title}
                      </h3>
                      <span className="text-sm font-medium text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                        {activity?.stats}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {activity?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workspace & Tools */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              My Development Environment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The tools and setup that help me stay productive and create quality code every day.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-brand-lg">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Workspace Image */}
              <div className="relative">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop"
                    alt="Development workspace setup"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">My daily workspace</p>
                  <p className="text-xs opacity-80">Where the magic happens ✨</p>
                </div>
              </div>

              {/* Tools Grid */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Essential Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {workspaceTools?.map((tool, index) => (
                    <div
                      key={tool?.name}
                      className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name={tool?.icon} size={20} className="text-violet-600" />
                        <div>
                          <div className="font-medium text-slate-900">{tool?.name}</div>
                          <div className="text-sm text-slate-600">{tool?.category}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Coffee" size={20} className="text-violet-600" />
                    <h4 className="font-bold text-slate-900">Productivity Secret</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    I'm most productive in the early morning hours (6-10 AM) with a good cup of coffee and instrumental music. 
                    This quiet time allows for deep focus on complex problems and architectural decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;