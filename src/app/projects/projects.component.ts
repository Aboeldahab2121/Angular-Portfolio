import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedProject: any = null;

  projects = [
    {
      title: 'VoltByte',
      description: 'A Laravel-based web platform for digital services.',
      logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      details: [
        'Built with Laravel 11',
        'Includes authentication, admin panel, and responsive UI'
      ]
    },
    {
      title: 'Content Scheduler',
      description: 'A Laravel app for planning and publishing posts.',
      logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      details: ['Laravel backend', 'Task queueing', 'Post scheduling']
    },
    {
      title: 'Property Management System',
      description: 'Manage properties, tenants, and invoices in Laravel.',
      logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      details: ['Laravel', 'MySQL', 'Notification system']
    },
    {
      title: 'Connect Four Game',
      description: 'Classic Connect Four built with C# Windows Forms.',
      logo: 'https://cdn.worldvectorlogo.com/logos/c--4.svg',
      details: ['C#', 'WinForms', 'Player vs Player / AI mode']
    },
    {
      title: 'CREDO',
      description: 'Blockchain-based identity verification system.',
      logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      details: ['Node.js', 'TailwindCSS', 'Blockchain integration']
    },
    {
      title: 'GUI Scientific Calculator',
      description: 'Python Tkinter calculator with advanced features.',
      logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      details: ['Python', 'Tkinter', 'Math library functions']
    }
  ];

  openProject(project: any) {
    if (event) event.preventDefault();
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
