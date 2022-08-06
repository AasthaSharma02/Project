import './style.css'
import Card from './Card'

function CustomerStats() {
    return (
        <section>
            <div className="parallax1">
                <div className='caption'>
                    <span class="border">A Platform to give Wings To Your Ideas</span>
                </div>
            </div>
            <div className="about">
                <h1>TECH startup</h1>
                <p>We help tech businesses boost their technology, product and work frameworks. With experienced leadership and fractional time agreement.</p>
            </div>

            <div className="parallax2">
                <div className='info'>
                    <Card
                        img=""
                        name="Goals"
                        desc=" We help organisations to unlock value by cutting complexity and delivering consistent and clear ways of working."
                    />
                    <Card
                        img=""
                        name="Products"
                        desc="Find the quality wholesale supplies and equipment you need for your high-performing designing in Websites. Satisfaction guaranteed."
                    />
                    <Card
                        img=""
                        name="Services & Technology"
                        desc="Balance customer care, operational efficiency and business growth with the help of our Technical management tools and consultancy services."
                    />
                    
                </div>
            </div>
            <p></p>
            <div className="parallax3"></div>
        </section>
    );
}

export default CustomerStats;