import React from 'react';
import {
    MessageCircle, Zap, Clock, Camera, Star,
    CheckCircle, Crown, Smartphone, ArrowRight,
    Heart, Award, Users, Film, Play, MapPin
} from 'lucide-react';

const EventLanding = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="app-container">
            {/* Navigation */}
            <nav className="nav-bar">
                <div className="nav-logo">
                    <span className="logo-text">
                        <span className="logo-craft">Craft</span>
                        <span className="logo-quick">Quick</span>
                    </span>
                </div>
                <div className="nav-actions">
                    <button className="btn-secondary" onClick={() => scrollToSection('packages')}>
                        Packages
                    </button>
                    <button className="btn-primary">
                        <MessageCircle size={18} />
                        Book Now
                    </button>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <MapPin size={14} />
                        Hyderabad's Fastest Event Storytellers
                    </div>
                    <h1 className="hero-headline">
                        Crafted Stories.<br />
                        <span className="text-highlight">Quick Delivery.</span>
                    </h1>
                    <p className="hero-subheadline">
                        Book in the morning. Get your cinematic highlight reel by evening.
                        Same-day delivery, guaranteed. Every time.
                    </p>
                    <div className="hero-cta-group">
                        <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                            <MessageCircle size={20} />
                            Book via WhatsApp
                        </button>
                        <button className="btn-secondary">
                            <Play size={18} />
                            Watch Our Work
                        </button>
                    </div>
                    <div className="hero-proof">
                        <div className="proof-item">
                            <span className="proof-number">247+</span>
                            <span className="proof-label">Events Covered</span>
                        </div>
                        <div className="proof-item">
                            <span className="proof-number">100%</span>
                            <span className="proof-label">Same-Day Rate</span>
                        </div>
                        <div className="proof-item">
                            <span className="proof-number">4.9★</span>
                            <span className="proof-label">Client Rating</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img
                        src="/hero-cartoon.png"
                        alt="CraftQuick Event Videography"
                        className="hero-illustration"
                    />
                </div>
            </section>

            {/* PROBLEM SECTION */}
            <section className="problem-section">
                <h2 className="section-title">Why Wait Weeks for Memories?</h2>
                <p className="section-subtitle">
                    Traditional videographers make you choose between quality and speed. We believe you deserve both.
                </p>
                <div className="problem-grid">
                    <div className="problem-card">
                        <div className="card-icon">
                            <Clock size={32} color="#E87C4A" />
                        </div>
                        <h3>Endless Waiting</h3>
                        <p>The excitement fades while you wait weeks for edited footage. Your celebration deserves better.</p>
                    </div>
                    <div className="problem-card">
                        <div className="card-icon">
                            <Film size={32} color="#E87C4A" />
                        </div>
                        <h3>Lost Moments</h3>
                        <p>Phone clips are shaky and miss the magic. You need pro-tier quality to relive the real emotions.</p>
                    </div>
                    <div className="problem-card">
                        <div className="card-icon">
                            <Users size={32} color="#E87C4A" />
                        </div>
                        <h3>Overcomplicated</h3>
                        <p>Apps, platforms, endless back-and-forth. We keep it simple — just WhatsApp us.</p>
                    </div>
                </div>
            </section>

            {/* SOLUTION SECTION */}
            <section className="solution-section">
                <h2 className="section-title">How CraftQuick Works</h2>
                <p className="section-subtitle">
                    From booking to beautifully edited reels — all within hours, not weeks.
                </p>
                <div className="steps-container">
                    <div className="solution-step">
                        <div className="step-number">01</div>
                        <div className="step-icon">
                            <MessageCircle size={28} />
                        </div>
                        <h3>WhatsApp Us</h3>
                        <p>Send a quick message with your event details. No forms, no apps, no hassle.</p>
                    </div>

                    <div className="step-arrow">
                        <ArrowRight size={24} />
                    </div>

                    <div className="solution-step">
                        <div className="step-number">02</div>
                        <div className="step-icon">
                            <Camera size={28} />
                        </div>
                        <h3>We Capture</h3>
                        <p>Our pro-tier creators capture the magic, emotions, and best moments of your event.</p>
                    </div>

                    <div className="step-arrow">
                        <ArrowRight size={24} />
                    </div>

                    <div className="solution-step">
                        <div className="step-number">03</div>
                        <div className="step-icon">
                            <Zap size={28} />
                        </div>
                        <h3>Same-Day Delivery</h3>
                        <p>Receive your crafted cinematic reels by evening. Post them while they're still hot!</p>
                    </div>
                </div>
            </section>

            {/* PACKAGES SECTION */}
            <section id="packages" className="packages-section">
                <h2 className="section-title">Simple, Transparent Pricing</h2>
                <p className="section-subtitle">
                    Choose the package that fits your celebration. No hidden fees, ever.
                </p>
                <div className="packages-grid">
                    {/* Quick Reels */}
                    <div className="pricing-card">
                        <h3>Quick Reels</h3>
                        <div className="price">₹9,999</div>
                        <p className="price-subtitle">Perfect for intimate gatherings</p>
                        <ul className="feature-list">
                            <li><CheckCircle size={18} color="#E87C4A" /> 2 Premium Same-Day Reels</li>
                            <li><CheckCircle size={18} color="#E87C4A" /> Complete Raw Footage</li>
                            <li><CheckCircle size={18} color="#E87C4A" /> 4 Hours Coverage</li>
                            <li><CheckCircle size={18} color="#E87C4A" /> 1 Pro Creator</li>
                        </ul>
                        <button className="btn-secondary" style={{ width: '100%' }}>Choose Quick Reels</button>
                    </div>

                    {/* Most Popular */}
                    <div className="pricing-card popular">
                        <div className="popular-badge">
                            <Crown size={14} />
                            Most Popular
                        </div>
                        <h3>Complete Story</h3>
                        <div className="price">₹19,999</div>
                        <p className="price-subtitle">Ideal for weddings & celebrations</p>
                        <ul className="feature-list">
                            <li><Star size={18} color="#E87C4A" fill="#E87C4A" /> 4 Premium Same-Day Reels</li>
                            <li><Star size={18} color="#E87C4A" fill="#E87C4A" /> 1-Min Highlight Film</li>
                            <li><Star size={18} color="#E87C4A" fill="#E87C4A" /> Full Day Coverage</li>
                            <li><Star size={18} color="#E87C4A" fill="#E87C4A" /> 2 Pro Creators</li>
                        </ul>
                        <button className="btn-primary" style={{ width: '100%' }}>Choose Complete Story</button>
                    </div>

                    {/* Full Social */}
                    <div className="pricing-card">
                        <h3>Full Cinematic</h3>
                        <div className="price">₹29,999</div>
                        <p className="price-subtitle">For corporate & grand events</p>
                        <ul className="feature-list">
                            <li><CheckCircle size={18} color="#E87C4A" /> 6 Premium Reels</li>
                            <li><CheckCircle size={18} color="#E87C4A" /> 3-Min After-Movie</li>
                            <li><CheckCircle size={18} color="#E87C4A" /> 2 Days Coverage</li>
                            <li><CheckCircle size={18} color="#E87C4A" /> 3 Pro Creators</li>
                        </ul>
                        <button className="btn-secondary" style={{ width: '100%' }}>Choose Full Cinematic</button>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="final-cta-section">
                <h2>Ready to Relive Your Celebration Tonight?</h2>
                <p>Book your event coverage now and get your crafted story delivered the same day. Guaranteed.</p>
                <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                    <MessageCircle size={20} />
                    Book via WhatsApp Now
                </button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2026 CraftQuick. Made with <Heart size={14} fill="#E87C4A" color="#E87C4A" /> in Hyderabad</p>
            </footer>
        </div>
    );
};

export default EventLanding;
