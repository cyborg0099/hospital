import React from 'react';
import '../styles/HomePage.css';
import '../styles/Interactive.css';
import '../styles/Typography.css';
import '../styles/NavigationBar.css';
import '../styles/Footer.css';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="homepage">
       <header className="homepage-header bg-primary py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="display-4 text-white">Welcome to Our Hospital Management System</h1>
              <p className="lead text-white">Your one-stop solution for efficient hospital management.</p>
              <button className="btn btn-success btn-lg cta-button">Buy Medicines</button>
            </div>
          </div>
        </div>
      </header>


      <section className="statistics py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 stat text-center">
              <h2 className="display-4">10,000+</h2>
              <p className="lead">Patients Managed</p>
            </div>
            <div className="col-md-4 stat text-center">
              <h2 className="display-4">5,000+</h2>
              <p className="lead">Appointments Scheduled</p>
            </div>
            <div className="col-md-4 stat text-center">
              <h2 className="display-4">1,000+</h2>
              <p className="lead">Successful Surgeries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 feature text-center">
              <img src="https://www.ashtonshospitalpharmacy.com/wp-content/uploads/2016/04/Surgical-Patient-involvement-hospital-patient-nurse-iStock_000074621731_Full.jpg" alt="Patient Management" className="feature-image img-fluid rounded" />
              <h3 className="h5">Patient Management</h3>
              <p className="text-muted">Manage patient records, histories, and information seamlessly.</p>
            </div>
            <div className="col-md-4 feature text-center">
              <img src="https://thumbs.dreamstime.com/z/book-your-medical-appointment-online-using-mobile-app-doctor-sitting-desk-background-wearing-face-mask-190595834.jpg" alt="Appointment Scheduling" className="feature-image img-fluid rounded" />
              <h3 className="h5">Appointment Scheduling</h3>
              <p className="text-muted">Schedule and manage appointments with ease, improving patient experience.</p>
            </div>
            <div className="col-md-4 feature text-center">
              <img src="https://medicalbillingservicereview.com/wp-content/uploads/2021/12/medical-billing-systems-1024x682.jpeg" alt="Billing and Payments" className="feature-image img-fluid rounded" />
              <h3 className="h5">Billing and Payments</h3>
              <p className="text-muted">Handle billing, payments, and invoicing efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5">
        <div className="container">
          <h2 className="h3">What Our Patients Say</h2>
          <div className="row">
            <div className="col-md-6 testimonial text-center">
              <p className="lead">"This hospital management system has revolutionized our workflow."</p>
              <p className="text-mute">- John Doe</p>
            </div>
            <div className="col-md-6 testimonial text-center">
              <p className="lead">"Efficient and easy to use, it made managing our appointments so much simpler."</p>
              <p className="text-muted">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team py-5">
        <div className="container">
          <h2 className="h3">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-6 team-member text-center">
            <img src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="Team Member" className="img-fluid" />
            <h3>Dr. John Doe</h3>
            <p>Chief Medical Officer</p>
          </div>
          <div className="col-md-6 team-member">
            <img src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" alt="Team Member" className="img-fluid" />
            <h3>Jane Smith</h3>
            <p>Head of Administration</p>
          </div>
        </div>
        </div>
      </section>
            {/* Biography Section */}
            <div className="biography-section py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4 bio-image text-center">
        <img src="https://static.vecteezy.com/system/resources/previews/024/585/326/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png" alt="Our Team" className="img-fluid rounded" />
      </div>
      <div className="col-md-8 bio-content">
        <h2 className="h3">Biography</h2>
        <p className='bio-para'>
          We are a dedicated team of healthcare professionals and technologists
          committed to transforming the way hospitals operate. Our hospital
          management system is designed to streamline administrative tasks,
          enhance patient care, and improve overall efficiency. By leveraging
          cutting-edge technology, we aim to create a seamless experience for
          both patients and staff, making healthcare more accessible and effective.
        </p>
      </div>
    </div>
  </div>
</div>
            <Footer />
        </div>
    );
};

export default HomePage;
