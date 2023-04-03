import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4"> About Page</h1>
        <h3 className="text-lg mb-8">
          Welcome to the "About" page for Anglers Tales! We are a community of
          fishing enthusiasts who love to share our experiences, tips, and
          stories with fellow anglers from around the world.
        </h3>
        <p className="text-gray-700 leading-7 mb-8">
          Our platform is designed to connect anglers of all skill levels and
          interests, whether you're a seasoned pro or just starting out. We
          provide a variety of features and tools to help you make the most of
          your fishing experience, including: A social feed where you can post
          photos, videos, and updates about your latest catches and fishing
          adventures. A forum where you can connect with other anglers who share
          your interests. A map feature that allows you to discover new fishing
          spots and see what other anglers are catching in your area. A gear and
          tackle section where you can browse and review the latest fishing gear
          and equipment. A blog with articles and videos on a variety of topics
          related to fishing, including techniques, conservation, and more.
        </p>
        <p className="text-gray-700 leading-7">
          Our mission is to create a welcoming and inclusive community for all
          anglers, regardless of their background, experience, or interests. We
          believe that fishing is not just a hobby, but a way of life that
          connects us to nature, our fellow anglers, and ourselves. Thank you
          for joining our community and we look forward to seeing you on the
          water!
        </p>
      </div>

      <div className="clifton-socials flex flex-col items-center">
        <h1 class="mb-2">Clifton Lucas</h1>
        <img
          className="w-32 h-32 object-cover rounded-full mb-4"
          src="https://media.licdn.com/dms/image/D5635AQFGsSd3_PpiBg/profile-framedphoto-shrink_200_200/0/1680210501089?e=1681016400&v=beta&t=WkuZVIY4VwTNebIVheRiaKGfg9LbPuWETavUm2nl_pE"
          alt="clifton"
        />
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/Cliftonlucas1">
            <img
              className="w-8 h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/clifton-lucas-b80540121/">
            <img
              className="w-8 h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
