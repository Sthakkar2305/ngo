import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Seva Foundation</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Seva Foundation has been at the forefront of social change in India. 
              Our journey began with a simple mission: to create lasting positive impact in 
              underserved communities across the nation.
            </p>
            <p className="text-gray-600">
              Over the years, we've grown from a small group of passionate volunteers to a 
              nationwide organization, touching thousands of lives through our various initiatives 
              in education, healthcare, and sustainable development.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <Card className="p-6 bg-primary/5">
              <p className="text-lg font-medium">
                To create a society where every individual has access to quality education, 
                healthcare, and opportunities for growth, regardless of their socio-economic background.
              </p>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-gray-600">
                  Providing quality education and skills training to underprivileged children 
                  and youth across India.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-600">
                  Ensuring accessible healthcare services in rural and urban communities 
                  through mobile clinics and health camps.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Promoting environmental conservation and sustainable practices in 
                  communities across India.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Community Development</h3>
                <p className="text-gray-600">
                  Building stronger communities through local initiatives and 
                  empowerment programs.
                </p>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-gray-600">Children Educated</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">Villages Reached</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-gray-600">Active Volunteers</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">₹10Cr+</div>
                <div className="text-gray-600">Funds Raised</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;