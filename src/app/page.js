'use client';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import "@/app/globals.css";
import { HeroSection } from '@/components/component/hero-section.jsx';
import  NavBar  from '@/components/component/NavBar.js';

const MyComponent = () => {
  //json-server --watch ./data/db.json --port 4000
  async function getProjects() {
    const result = await fetch('http://localhost:4000/projects');
    return result.json();
  }

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      setProjects(projectsData);
    }

    fetchProjects();
  }, []);

  return (
    <BrowserRouter>
  <div className="heroSection">
    <HeroSection />
  </div>
  <div className="cardSectionBody">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <Card
          key={project.id}
          className="flex-col gap-4 items-center w-full max-w-xs mx-auto"
        >
          <CardHeader>
            <div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {/* <img src={project.image} alt={project.title} className="w-full h-auto" /> */}
            <img src={"./img-home.jpg"} alt={project.title} className="w-full h-auto" />
            <p>Skills: {project.skills.join(', ')}</p>
            <p>Time: {project.time}</p>
          </CardContent>
          <CardFooter>
            <button>View Project</button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</BrowserRouter>
);
}

export default MyComponent;
