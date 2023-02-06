import { Search } from "../components/search/search"
import { BrandingImage } from "../components/branding-image/branding-image"

function HomePage() {
    return (<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '24px'}}>
    <BrandingImage />
    <Search/>
    </div>)
  }
  
  export default HomePage
  