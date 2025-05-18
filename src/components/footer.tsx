// src/components/footer.tsx
"use client";
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-container w-full mt-[0px]">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Home</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Resources <span className="badge-new">New</span></a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>News</h4>
          <ul>
            <li><a href="#">Trending Stories</a></li>
            <li><a href="#">Featured Videos</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Politics</a></li>
            <li><a href="#">Environment</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Blogs</h4>
          <ul>
            <li><a href="#">Quantum Computing</a></li>
            <li><a href="#">AI Ethics</a></li>
            <li><a href="#">Space Exploration</a></li>
            <li><a href="#">Robotics <span className="badge-new">New</span></a></li>
            <li><a href="#">Renewable Energy</a></li>
            <li><a href="#">Computer Science</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Podcasts (Coming Soon)</h4>
          <ul>
            <li><a href="#">AI Revolution</a></li>
            <li><a href="#">AI Revolution <span className="badge-new">New</span></a></li>
            <li><a href="#">TechTalk AI</a></li>
            <li><a href="#">AI Conversations</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#" className="resource-btn">Whitepapers<ArrowUpRight className="w-6 h-6 text-[#18B9EA] font-bold  rounded-full" /></a></li>
            <li><a href="#" className="resource-btn">Ebooks <ArrowUpRight className="w-6 h-6 text-[#18B9EA] font-bold  rounded-full" /></a></li>
            <li><a href="#" className="resource-btn">Reports<ArrowUpRight className="w-6 h-6 text-[#18B9EA] font-bold  rounded-full" /></a></li>
            <li><a href="#" className="resource-btn">Research Papers <ArrowUpRight className="w-6 h-6 text-[#18B9EA] font-bold  rounded-full" /></a></li>
          </ul>
        </div>
      </div>

      <hr className="footer-separator" />

      <div className="footer-bottom">
        <div className="footer-terms">
  <a href="#">Terms & Conditions</a>|<a href="#">Privacy Policy</a>
</div>

       
      <div className="footer-social">
        <a href="#" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
        <a href="#" aria-label="GitHub" className="social-icon"><FaGithub /></a>
        <a href="#" aria-label="LinkedIn" className="social-icon"><FaLinkedin /></a>
      </div>

        <div className="footer-copy">
          © 2025 StellaX Technologies. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer-container {
  background-color: #0a0a0a;
  color: #b0b0b0;
  padding: 3rem 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

        .footer-links {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .footer-column {
          flex: 1 1 150px;
          min-width: 140px;
        }
        .footer-column h4 {
          color: white;
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 1rem;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-column ul li {
          margin-bottom: 0.6rem;
        }
        .footer-column ul li a {
          color: #666666;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-column ul li a:hover {
          color: #1eb7ff; /* Bright blue hover */
        }
        .badge-new {
  background: linear-gradient(145deg, #000000, #222222);
  color: #fff;
  font-size: 10px;
  font-weight: 200;
  padding: 3px 8px;
  margin-left: 6px;
  border-radius: 12px;
  vertical-align: middle;
  letter-spacing: 0.7px;
  display: inline-block;
  line-height: 1;
  box-shadow:
    0 1px 2px rgba(255, 255, 255, 0.15) inset,
    0 0 6px rgba(255, 255, 255, 0.1);
  user-select: none;
  cursor: default;
}

        .resource-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 6px 12px;
          border: 1px solid #222;
          border-radius: 4px;
          color: #b0b0b0;
          font-size: 13px;
          background: transparent;
        }
        .resource-btn:hover {
          border-color: #1eb7ff;
          color: #1eb7ff;
        }
        .external-link {
          font-size: 14px;
        }
        .footer-separator {
          border-color: #222;
          margin: 2rem 0;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1400px;
          margin: 0 auto;
          font-size: 13px;
        }
        .footer-terms a {
  margin: 0 0.3rem;  /* little space on left and right */
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-terms a:hover {
  color: #1eb7ff;
}

        .footer-social {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
  font-size: 20px; /* or 18px, your choice */
  color: #fff;    /* white icons */
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #1eb7ff; /* bright blue on hover */
}

        .footer-copy {
          color: #444;
        }

        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 1.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          .footer-terms {
            order: 2;
          }
          .footer-social {
            order: 1;
            justify-content: center;
          }
          .footer-copy {
            order: 3;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;