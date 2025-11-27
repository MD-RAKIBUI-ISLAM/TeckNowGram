import CommercialPartners from '../Partners/CommercialPartners';
import GovtInstitutionalPartners from '../Partners/GovtInstitutionalPartners';
import InternationalPartners from '../Partners/InternationalPartner';
import PartnersHero from '../Partners/PartnersHero';

function GovtInstitutionalPartner() {
    return (
        <main>
            <PartnersHero />
            <GovtInstitutionalPartners />
            <InternationalPartners />
            <CommercialPartners />
        </main>
    );
}

export default GovtInstitutionalPartner;
