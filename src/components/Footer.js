import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShareIcon from '@mui/icons-material/Share';

export default function Footer() {
  return (
    <footer className="globalfooter">
  <div class="footer-col">
    <AlternateEmailIcon/>
    <h3>Kontakt os</h3>
    <p>Kaløgade 8</p>
    <p>8000 Aarhus C</p>
    <p>Tlf: 30308820</p>
    <p>Email: Mariusewers@yahoo.dk</p>
  </div>
  <div class="footer-col">
    <AccessTimeIcon/>
    <h3>Åbningstider</h3>
    <p>Mandag-fredag: 9-17</p>
    <p>Lørdag: 10-15</p>
    <p>Søndag: Lukket</p>
  </div>
  <div class="footer-col">
    <div class="footer-col-1-1">
  <ShareIcon className='footer-følg'/>
  <h3 className='footer-p'>Følg os</h3>
</div>
    <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  </div>
    </footer>
  );
}