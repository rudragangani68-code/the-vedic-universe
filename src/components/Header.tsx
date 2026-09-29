import React, { useEffect, useRef } from 'react';
import { Menu, Search, Instagram, Mail } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../data/brand';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenSearch,
  onOpenContact,
  activeSection = 'home',
}) => {

  /* =========================================================
     MOBILE NAVIGATION AUTO-SCROLL

     STATE 0
     HOME | PHILOSOPHY | OUR PRODUCTS | ...

     STATE 1
     PHILOSOPHY | OUR PRODUCTS | AYURVEDA | WHY US
     | ABOUT THE FOUNDER | ...

     STATE 2
     ... | WHY US | ABOUT THE FOUNDER | CONTACT

     Scrolling upward reverses the states:

     STATE 2 → STATE 1 → STATE 0

     Automatic movement is MOBILE ONLY.
  ========================================================= */

  const mobileNavScrollRef =
    useRef<HTMLDivElement | null>(null);

  /*
   * 0 = HOME position
   * 1 = PHILOSOPHY position
   * 2 = CONTACT position
   */
  const navPosition =
    useRef<number>(0);

  const lastScrollY =
    useRef<number>(0);


  useEffect(() => {

    /*
     * Automatic horizontal navigation is mobile only.
     */
    if (window.innerWidth >= 640) {
      return;
    }

    const navContainer =
      mobileNavScrollRef.current;

    if (!navContainer) {
      return;
    }

    const philosophySection =
      document.getElementById('brand-intro');

    if (!philosophySection) {
      return;
    }

    lastScrollY.current =
      window.scrollY;


    /* =======================================================
       FIND A NAVIGATION LINK
    ======================================================= */

    const getNavLink = (
      label: string
    ): HTMLElement | null => {

      const links =
        Array.from(
          navContainer.querySelectorAll('a')
        );

      const link =
        links.find(
          (item) =>
            item.textContent
              ?.trim()
              .toLowerCase() ===
            label.toLowerCase()
        );

      return link as HTMLElement | null;
    };


    /* =======================================================
       MOVE TO HOME
    ======================================================= */

    const moveToHome = () => {

      if (navPosition.current === 0) {
        return;
      }

      navContainer.scrollTo({
        left: 0,
        behavior: 'smooth',
      });

      navPosition.current = 0;
    };


    /* =======================================================
       MOVE TO PHILOSOPHY
    ======================================================= */

    const moveToPhilosophy = () => {

      const philosophyLink =
        getNavLink('Philosophy');

      if (!philosophyLink) {
        return;
      }

      const navRect =
        navContainer.getBoundingClientRect();

      const linkRect =
        philosophyLink.getBoundingClientRect();

      /*
       * Put Philosophy approximately at the
       * left edge of the navigation.
       */
      const targetScrollLeft =
        navContainer.scrollLeft +
        (linkRect.left - navRect.left) -
        8;

      navContainer.scrollTo({
        left: Math.max(
          0,
          targetScrollLeft
        ),
        behavior: 'smooth',
      });

      navPosition.current = 1;
    };


    /* =======================================================
       MOVE TO CONTACT
    ======================================================= */

    const moveToContact = () => {

      const contactLink =
        getNavLink('Contact');

      if (!contactLink) {
        /*
         * Fallback if the label is not exactly "Contact".
         * Move to the maximum available scroll position.
         */
        navContainer.scrollTo({
          left:
            navContainer.scrollWidth -
            navContainer.clientWidth,
          behavior: 'smooth',
        });

        navPosition.current = 2;

        return;
      }

      const navRect =
        navContainer.getBoundingClientRect();

      const contactRect =
        contactLink.getBoundingClientRect();

      /*
       * We want CONTACT to finish near the
       * right edge of the visible navigation.
       *
       * This produces a position similar to:
       *
       * ... | WHY US | ABOUT THE FOUNDER | CONTACT
       */
      const targetScrollLeft =
        navContainer.scrollLeft +
        (contactRect.right - navRect.right);

      /*
       * Small breathing space on the right.
       */
      const finalScrollLeft =
        targetScrollLeft + 8;

      const maxScrollLeft =
        navContainer.scrollWidth -
        navContainer.clientWidth;

      navContainer.scrollTo({
        left: Math.min(
          maxScrollLeft,
          Math.max(
            0,
            finalScrollLeft
          )
        ),
        behavior: 'smooth',
      });

      navPosition.current = 2;
    };


    /* =======================================================
       PAGE SCROLL HANDLER
    ======================================================= */

    const handleScroll = () => {

      const currentScrollY =
        window.scrollY;

      const scrollingDown =
        currentScrollY >
        lastScrollY.current;

      const scrollingUp =
        currentScrollY <
        lastScrollY.current;


      const philosophyRect =
        philosophySection.getBoundingClientRect();


      /*
       * =====================================================
       * TWO VERTICAL TRIGGER POINTS
       *
       * FIRST:
       * Philosophy TOP reaches 50% of viewport.
       *
       * SECOND:
       * Philosophy BOTTOM reaches 50% of viewport.
       *
       * This gives us two distinct navigation shifts.
       * =====================================================
       */

      const firstTrigger =
        philosophyRect.top <=
        window.innerHeight * 0.5;

      const secondTrigger =
        philosophyRect.bottom <=
        window.innerHeight * 0.5;


      /* =====================================================
         SCROLLING DOWN
      ===================================================== */

      if (scrollingDown) {

        /*
         * FIRST NAVIGATION SHIFT
         *
         * HOME → PHILOSOPHY
         */
        if (
          firstTrigger &&
          navPosition.current === 0
        ) {
          moveToPhilosophy();
        }


        /*
         * SECOND NAVIGATION SHIFT
         *
         * PHILOSOPHY → CONTACT
         */
        if (
          secondTrigger &&
          navPosition.current === 1
        ) {
          moveToContact();
        }
      }


      /* =====================================================
         SCROLLING UP
      ===================================================== */

      if (scrollingUp) {

        /*
         * SECOND POSITION → FIRST POSITION
         *
         * CONTACT → PHILOSOPHY
         */
        if (
          !secondTrigger &&
          navPosition.current === 2
        ) {
          moveToPhilosophy();
        }


        /*
         * FIRST POSITION → HOME
         *
         * PHILOSOPHY → HOME
         */
        if (
          !firstTrigger &&
          navPosition.current === 1
        ) {
          moveToHome();
        }
      }


      lastScrollY.current =
        currentScrollY;
    };


    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      );

    };

  }, []);


  return (
    <>
      {/* =========================================================
          PRIMARY BRAND BAR — SCROLLS AWAY
      ========================================================= */}

      <header
        id="main-header"
        className="
          relative
          z-40
          w-full
          min-w-0
          max-w-none
          overflow-x-hidden
          bg-[#FBF9F5]
          border-b
          border-[#EBE6DC]
        "
      >

        <div
          className="
            relative
            w-full
            max-w-7xl
            mx-auto
            px-3
            sm:px-6
            lg:px-10
            h-16
            min-[350px]:h-20
            sm:h-24
            flex
            items-center
            justify-between
          "
        >

          {/* =====================================================
              LEFT: MENU
          ===================================================== */}

          <div
            className="
              flex
              items-center
              gap-3
              w-[40px]
              min-[350px]:w-[44px]
              sm:w-1/4
              shrink-0
            "
          >

            <button
              type="button"
              id="header-menu-btn"
              onClick={onOpenMenu}
              aria-label="Open Navigation Menu"
              className="
                p-2
                -ml-2
                text-[#560C05]
                hover:text-[#5F574B]
                transition-colors
                rounded-sm
                focus:outline-none
                focus:ring-1
                focus:ring-[#A9783F]
              "
            >
              <Menu
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  stroke-[1.5]
                "
              />
            </button>

            <span
              className="
                hidden
                sm:inline-block
                text-[11px]
                tracking-[0.2em]
                uppercase
                text-[#654F42]
                font-medium
              "
            >
              Menu
            </span>

          </div>


          {/* =====================================================
              CENTER: BRAND WORDMARK
          ===================================================== */}

          <div
            className="
              min-w-0
              flex-1
              flex
              items-center
              justify-center
              text-center

              sm:absolute
              sm:left-1/2
              sm:-translate-x-1/2

              lg:relative
              lg:left-auto
              lg:translate-x-0
              lg:flex-1
              lg:max-w-[500px]
            "
          >

            <a
              href="#home"
              id="brand-logo-link"
              className="
                group
                inline-flex
                min-w-0
                max-w-full
                items-center
                justify-center
                whitespace-nowrap
              "
            >

              <span
                className="
                  font-serif

                  text-[14px]
                  min-[350px]:text-[16px]

                  sm:text-[28px]
                  sm:tracking-[0.12em]

                  lg:text-3xl
                  lg:tracking-[0.18em]

                  tracking-[0.08em]
                  min-[350px]:tracking-[0.12em]

                  text-[#4A1710]
                  uppercase
                  font-medium

                  transition-colors
                  group-hover:text-[#654F42]

                  whitespace-nowrap
                "
              >
                The Vedic Universe
              </span>

            </a>

          </div>


          {/* =====================================================
              RIGHT: HEADER ACTIONS
          ===================================================== */}

          <div
            className="
              flex
              items-center
              justify-end

              gap-0
              min-[350px]:gap-1

              w-[112px]
              min-[350px]:w-[120px]

              sm:w-[150px]
              sm:gap-1

              lg:w-1/4
              lg:gap-4

              shrink-0
            "
          >

            {/* Search */}

            <button
              type="button"
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Search essentials"
              title="Search products"
              className="
                p-2
                text-[#560C05]
                hover:text-[#5F574B]
                transition-colors
                rounded-sm
                focus:outline-none
                focus:ring-1
                focus:ring-[#A9783F]
                shrink-0
              "
            >
              <Search
                className="
                  w-5
                  h-5
                  stroke-[1.5]
                "
              />
            </button>


            {/* Instagram */}

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-instagram-link"
              aria-label="Visit Instagram profile"
              title="Follow on Instagram"
              className="
                p-2
                text-[#560C05]
                hover:text-[#5F574B]
                transition-colors
                inline-flex
                rounded-sm
                focus:outline-none
                focus:ring-1
                focus:ring-[#A9783F]
                shrink-0
              "
            >
              <Instagram
                className="
                  w-5
                  h-5
                  stroke-[1.5]
                "
              />
            </a>


            {/* Contact */}

            <button
              type="button"
              id="header-contact-btn"
              onClick={onOpenContact}
              aria-label="Contact brand"
              title="Enquire or Contact"
              className="
                p-2
                text-[#560C05]
                hover:text-[#5F574B]
                transition-colors
                rounded-sm
                focus:outline-none
                focus:ring-1
                focus:ring-[#A9783F]
                shrink-0
              "
            >
              <Mail
                className="
                  w-5
                  h-5
                  stroke-[1.5]
                "
              />
            </button>

          </div>

        </div>

      </header>


      {/* =========================================================
          SECONDARY NAVIGATION — STICKY
      ========================================================= */}

      <nav
        id="sub-header-nav"
        aria-label="Brand Sections"
        className="
          sticky
          top-0
          z-50
          w-full
          min-w-0
          max-w-none
          overflow-x-hidden
          bg-[#FBF9F5]/95
          backdrop-blur-md
          border-b
          border-[#F0EBE1]
        "
      >

        <div
          ref={mobileNavScrollRef}
          className="
            w-full
            min-w-0
            overflow-x-auto
            overflow-y-hidden
            overscroll-x-contain
            scrollbar-hide
            px-2
            sm:px-4
            lg:overflow-x-hidden
          "
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >

          <ul
            className="
              flex
              w-max
              min-w-full
              items-center
              justify-center
              gap-0
              py-2.5

              lg:w-full
              lg:min-w-0
            "
          >

            {NAV_ITEMS.map(
              (item, index) => {

                const sectionId =
                  item.href.replace('#', '');

                const isActive =
                  activeSection === sectionId;

                const isLast =
                  index ===
                  NAV_ITEMS.length - 1;

                return (

                  <li
                    key={item.label}
                    className={`
                      relative
                      shrink-0

                      ${
                        !isLast
                          ? 'border-r border-[#A9783F]/30'
                          : ''
                      }
                    `}
                  >

                    <a
                      href={item.href}
                      id={`nav-link-${sectionId}`}
                      className={`
                        group
                        relative
                        inline-block

                        text-[8px]
                        sm:text-[12px]

                        tracking-[0.10em]
                        sm:tracking-[0.2em]

                        font-medium
                        uppercase

                        transition-all
                        duration-200

                        py-1

                        px-[8px]
                        sm:px-4
                        lg:px-5

                        whitespace-nowrap

                        ${
                          isActive
                            ? 'text-[#4A1710]'
                            : 'text-[#654F42] hover:text-[#4A1710]'
                        }
                      `}
                    >

                      {item.label}

                      {/* Active / Hover Underline */}

                      <span
                        className={`
                          absolute
                          bottom-0

                          left-[8px]
                          right-[8px]

                          sm:left-4
                          sm:right-4

                          lg:left-5
                          lg:right-5

                          h-[1.5px]

                          bg-[#A9783F]

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? 'opacity-100'
                              : 'opacity-0 group-hover:opacity-100'
                          }
                        `}
                      />

                    </a>

                  </li>

                );
              }
            )}

          </ul>

        </div>

      </nav>
    </>
  );
};