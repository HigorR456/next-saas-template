'use client';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import * as Style from './styles';
import { Logo } from '../logo';
import LocaleSelect from '../localeSelect';
import { useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';

export default function Header() {
  const [showMenu, setShowMenu] = useState<number>(0);
  const navigation = useTranslations("Navigation");

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
            <LocaleSelect />
          </ul>
        </Style.Nav>
      </Style.Wrapper>
    </Style.Header>
  );
}
