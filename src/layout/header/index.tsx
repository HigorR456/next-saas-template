'use client';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import * as Style from './styles';
import { Logo } from '../logo';
import LocaleSelect from '../localeSelect';
import { useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import GoogleSignIn from '@/components/google-sign-in';
import { MdOutlineLogout } from "react-icons/md";
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [showMenu, setShowMenu] = useState<number>(0);
  const navigation = useTranslations("Navigation");
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  const handleLogOut = async () => {
    await signOut();
  }

  const handleContinueWithEmail = () => {
    withReactContent(Swal).fire({
      title: 'Create account',
      html: (
        <Style.SignUpWrap>
          <input type="text" id="email" placeholder="Email" />
          <input type="text" id="password" placeholder="Password" />
        </Style.SignUpWrap>
      ),
      confirmButtonText: 'Proceed',
    })
  }

  const handleSignUp = () => {
    withReactContent(Swal).fire({
      title: 'Sign in',
      text: 'Welcome, please sign in to continue',
      html: (
        <Style.SignUpWrap>
          <GoogleSignIn callbackUrl={pathname ?? "/"}>{navigation("signin_with_google")}</GoogleSignIn>
          {/* <Style.ContinueWithEmailButton onClick={handleContinueWithEmail}>{navigation("continue_with_email")}</Style.ContinueWithEmailButton> */}
        </Style.SignUpWrap>
      ),
      showCloseButton: true,
      showConfirmButton: false,
    })
  }

  return (
    <Style.Header $show={showMenu}>
      <Style.Wrapper>

        <Logo />

        <Style.MenuWrap
          onClick={() => (showMenu ? setShowMenu(0) : setShowMenu(1))}
          className='menuwrap'
        >
          <AiOutlineMenu className="menu-icon" />
          <AiOutlineClose className="close-icon" />
        </Style.MenuWrap>

        <Style.Nav>
          <ul>
            <li>
              <a href="/" onClick={() => setShowMenu(0)}>
                {navigation("home")}
              </a>
            </li>
            <Style.DropdownList>
              <a href="/" onClick={() => setShowMenu(0)}>
                Dropdown List
                <IoIosArrowDown />
              </a>
              <ul>
                <li>
                  <a href="/" onClick={() => setShowMenu(0)}>
                    Option 1
                  </a>
                </li>
                <li>
                  <a href="/" onClick={() => setShowMenu(0)}>
                    Option 2
                  </a>
                </li>
              </ul>
            </Style.DropdownList>
            <li>
              <a href="/about" onClick={() => setShowMenu(0)}>
                {navigation("about")}
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setShowMenu(0)}>
                {navigation("pricing")}
              </a>
            </li>
            {!user ? (
              <Style.HighlightList>
                <a onClick={handleSignUp}>
                  {navigation("signup")}
                </a>
              </Style.HighlightList>
            ) : (
              <Style.HighlightList>
                <a onClick={handleLogOut}>
                  <MdOutlineLogout size={20} />
                </a>
              </Style.HighlightList>
            )}
            <LocaleSelect />
          </ul>
        </Style.Nav>
      </Style.Wrapper>
    </Style.Header>
  );
}
