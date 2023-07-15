import './Plans.css';
import Card from '../Cards/Cards';

const Plans = () =>{
const plans =[
    {
        Sub : 'FREE',
        price : '0$/Month',
          A : ' Single User',
          B : '5GB Storage',
          C : ' Unlimited Public Projects',
          D : 'Community Access',
          E :' Unlimited Private Projects',
          F :'Dedicated Phone Support',
          G :' Free Subdomain',
          H :' Monthly Status Reports',
    },
    {
        Sub : 'BASIC',
        price : '9$/Month',
        A : '5 User',
        B : '50GB Storage',
        C : ' Unlimited Public Projects',
        D : 'Community Access',
        E : ' Unlimited Private Projects',
        F : 'Dedicated Phone Support',
        G : ' Free Subdomain',
        H  : ' Monthly Status Reports',
    },
    {
        Sub : 'PREMIUM',
        price : '18$/Month',
        A : ' Unlimited User',
        B :    '150GB Storage',
        C :   ' Unlimited Public Projects',
        D :   'Community Access',
        E :  ' Unlimited Private Projects',
        F :  'Dedicated Phone Support',
        G :  ' Free Subdomain',
        H :  ' Monthly Status Reports',
    }];
    return (
        <div className="pln-container">
            <div className='pln-list'>
                {
                    plans.map((content, index) => 
                        <Card content = {content} key={index} />
                    ) 
                }
            </div>
        </div>
    )
}
export default Plans;