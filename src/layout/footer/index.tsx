'use client';
import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa';
import * as Style from './styles';
import { Logo } from '../logo';

export default function Footer() {

  return (
    <Style.Footer>
      <Style.RowWrap>
        <Style.FirstRow>
            <div className='logo-wrap'>
              <Logo light />
            </div>
            {/* <div className='links'>
              <Link href='/' className='footer-link'>Home</Link>
              <Link href='/#about' className='footer-link'>About</Link>
              <Link href='/#contact' className='footer-link'>Contact</Link>
            </div> */}
        </Style.FirstRow>
          
        <Style.SecondRow className='second-row'>
            <div className='legal-text'>
              <div>
                <FaRegCopyright className='copyright' />
                2025. next-template-saas.
              </div>
            </div>

            <div className='legal-links'>
            </div>
        </Style.SecondRow>
      </Style.RowWrap>
  </Style.Footer>
  );
}
