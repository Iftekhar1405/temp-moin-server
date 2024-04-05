import React from 'react';
import './CoachingSection.css';

const AboutUs = () => {
    return (
        <div className="about-us-card">
            <div className="about-us-card-header">
                <h2>About Us</h2>
            </div>
            <div className="about-us-card-body">
                <div className="about-section">
                    <p>Welcome to <span className="about-us-highlight">[Coaching Center Name]</span>, your premier destination for top-tier CA coaching. Founded with a vision to nurture future finance professionals, we stand as a beacon of excellence in the realm of Chartered Accountancy education. At <span className="about-us-highlight">[Coaching Center Name]</span>, we believe in transforming aspirations into achievements, and we do so through a perfect blend of expert guidance, innovative teaching methodologies, and personalized attention.</p>
                </div>
                <div className="star-teacher-section">
                    <h3>Our Star Teacher: <span className="about-us-highlight">[Teacher's Name]</span></h3>
                    <img src='' alt="Teacher" className="about-us-teacher-image" />
                    <p>Central to our success story is our esteemed faculty member, <span className="about-us-highlight">[Teacher's Name]</span>. With a distinguished background in teaching at a renowned institution, <span className="about-us-highlight">[Teacher's Name]</span> brings a wealth of experience and expertise to our classrooms. Having honed the minds of countless students during <span className="about-us-highlight">[his/her]</span> tenure at <span className="about-us-highlight">[Well-Reputed School Name]</span>, <span className="about-us-highlight">[Teacher's Name]</span> is revered for <span className="about-us-highlight">[his/her]</span> pedagogical prowess and unwavering commitment to student success.</p>
                </div>
                <div className="why-choose-us-section">
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li><span className="about-us-highlight">Expert Faculty:</span> Our faculty comprises industry experts, seasoned professionals, and accomplished educators who impart knowledge with unparalleled proficiency.</li>
                        <li><span className="about-us-highlight">Holistic Approach:</span> We go beyond the syllabus, fostering holistic development by nurturing critical thinking, problem-solving skills, and ethical values among our students.</li>
                        <li><span className="about-us-highlight">Personalized Attention:</span> We understand that each student is unique, and thus, we offer personalized attention, ensuring every student receives the guidance they need to excel.</li>
                        <li><span className="about-us-highlight">Comprehensive Curriculum:</span> Our meticulously designed curriculum covers every aspect of the CA examinations, providing students with a comprehensive understanding of the subject matter.</li>
                        <li><span className="about-us-highlight">Interactive Learning:</span> Through interactive sessions, real-world case studies, and practical examples, we make learning engaging, immersive, and effective.</li>
                    </ul>
                </div>
                <div className="mission-section">
                    <h3>Our Mission</h3>
                    <p>At <span className="about-us-highlight">[Coaching Center Name]</span>, our mission is to empower students to realize their full potential and become competent professionals in the field of accountancy. We strive to instill in them a passion for learning, a commitment to excellence, and the confidence to overcome any challenge that comes their way.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
