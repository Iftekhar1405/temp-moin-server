import React, { useState } from 'react';
import './CoachingSection.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What are the eligibility criteria for CA exams?",
            answer: "To appear for the CA exams, a candidate must have completed the Intermediate course of the Institute of Company Secretaries of India (ICSI) or the Institute of Cost and Management Accountants of India (ICMAI) or its equivalent.",
        },
        {
            question: "How can I register for CA coaching classes?",
            answer: "You can register for CA coaching classes by visiting our website and filling out the registration form. Alternatively, you can visit our center in person and register at the front desk.",
        },
        {
            question: "What is the duration of CA coaching classes?",
            answer: "The duration of CA coaching classes varies depending on the course and the subjects you choose to study. Typically, classes are held for a few hours each day and may last for several months.",
        },
        {
            question: "Are there any scholarships available for CA students?",
            answer: "Yes, there are scholarships available for CA students offered by various organizations and institutions. You can inquire about scholarship opportunities at our center or search online for available options.",
        },
        {
            question: "How can I prepare for the CA exams effectively?",
            answer: "To prepare for the CA exams effectively, it is essential to attend classes regularly, study diligently, solve practice problems, and stay updated with the latest exam patterns and syllabus changes. Additionally, seeking guidance from experienced faculty members can greatly enhance your preparation.",
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                            <span className="question-text">{faq.question}</span>
                            <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
