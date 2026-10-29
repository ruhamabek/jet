import { SpanBlock2 } from "@/components/ui/SpanBlock2";

/** ConvertFiatCashSection */
export function ConvertFiatCashSection() {
  return (
    <section className="_currency-exchange-calculator flex flex-col items-center color-orange no-select">
      <div className="w-cols-10 xs-w-cols-14 mb-96-48 flex flex-col items-center pointer-events-none">
        <span className="_tag relative body-small inline-block" data-tone="orange">
          <div className="outline absolute inset-0" />
          <svg className="absolute w-full h-full top-0 left-0" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100%" height="100%" />
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>
          Exchange
        </span>
        <h2 className="title-3 xs-title-4 -medium mt-16 whitespace-pre-line">
          {"Convert fiat\ncash easily."}
        </h2>
        <span />
      </div>
      <div className="converter-container w-cols-4 md-w-cols-6 sm-w-cols-7 xs-w-cols-12">
        <div className="_currency-converter flex flex-col gap-8">
          <div className="_currency-card">
            <div className="_dropdown _currency-select" aria-expanded="false" aria-controls="v-6" role="button">
              <button data-expanded="false" className="flex items-center justify-between gap-32 br-16">
                <div className="background absolute inset-0 br-inherit" />
                <div className="label relative flex gap-8 items-center">
                  <img className="currency-icon" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20height='24'%20width='24'%3e%3cpath%20fill='%230052B4'%20d='M12%2024C18.6274%2024%2024%2018.6274%2024%2012C24%205.37258%2018.6274%200%2012%200C5.37258%200%200%205.37258%200%2012C0%2018.6274%205.37258%2024%2012%2024Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M12.0012%204.6958L12.3898%205.89154H13.647L12.6298%206.63052L13.0184%207.82626L12.0012%207.08723L10.9841%207.82626L11.3726%206.63052L10.3555%205.89154H11.6127L12.0012%204.6958Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M6.83474%206.83454L7.95506%207.4053L8.84404%206.51636L8.6473%207.75808L9.76757%208.32887L8.5258%208.52556L8.32912%209.76737L7.75832%208.64711L6.5166%208.84384L7.40559%207.95486L6.83474%206.83454Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M4.69531%2012.0005L5.89105%2011.6119V10.3547L6.62998%2011.3719L7.82577%2010.9833L7.08669%2012.0005L7.82577%2013.0176L6.62998%2012.6291L5.89105%2013.6463V12.389L4.69531%2012.0005Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M6.83474%2017.1658L7.40554%2016.0454L6.5166%2015.1565L7.75837%2015.3532L8.32907%2014.233L8.52581%2015.4747L9.76752%2015.6714L8.6474%2016.2422L8.84404%2017.4839L7.95506%2016.595L6.83474%2017.1658Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M12.0012%2019.3044L11.6127%2018.1086H10.3555L11.3727%2017.3697L10.9841%2016.174L12.0012%2016.9129L13.0184%2016.174L12.6298%2017.3697L13.647%2018.1086H12.3897L12.0012%2019.3044Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M17.1661%2017.1658L16.0459%2016.595L15.1568%2017.484L15.3536%2016.2422L14.2334%2015.6714L15.4751%2015.4747L15.6718%2014.233L16.2426%2015.3532L17.4843%2015.1565L16.5953%2016.0455L17.1661%2017.1658Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M19.3032%2012.0005L18.1075%2012.389V13.6463L17.3685%2012.6291L16.1729%2013.0176L16.9118%2012.0005L16.1729%2010.9833L17.3685%2011.3719L18.1075%2010.3547V11.612L19.3032%2012.0005Z'%3e%3c/path%3e%3cpath%20fill='%23FFDA44'%20d='M17.1661%206.8345L16.5953%207.95481L17.4843%208.84379L16.2425%208.64701L15.6718%209.76728L15.4751%208.52551L14.2334%208.32878L15.3536%207.75803L15.1568%206.51636L16.0459%207.40529L17.1661%206.8345Z'%3e%3c/path%3e%3c/svg%3e" alt="selected currency icon" />
                  <span className="body -book uppercase">
                    EUR
                  </span>
                </div>
                <SpanBlock2 className="_icon chevron br-full" />
              </button>
              <div id="v-6" className="overlay-container absolute mt-10">
                <div className="overlay" data-lenis-prevent="" />
                <div className="overlay-fade absolute inset-0" inert />
              </div>
            </div>
            <div className="slot subhead-2 -medium color-orange-900">
              <div className="input-container relative flex gap-4 items-center">
                <div className="whitespace-nowrap" />
                <input value="10" type="number" min="0" max="100000" placeholder="100" className="grow" />
                <span className="input-focus absolute" aria-hidden="true" inert />
              </div>
            </div>
          </div>
          <button className="swap-btn mx-auto" data-hitarea="" aria-label="swap button" data-swapped="false">
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.25 14.7502H18.9395L15.4456 19.1173L16.6169 20.0544L20.1107 15.6873C20.8965 14.7051 20.1973 13.2502 18.9395 13.2502L4.25 13.2502V14.7502Z" data-mode="fill" />
                <path fillRule="evenodd" clipRule="evenodd" d="M19.75 9.2502H5.06047L8.55418 4.88307L7.38288 3.94602L3.88917 8.31316C3.10345 9.2953 3.80271 10.7502 5.06047 10.7502L19.75 10.7502V9.2502Z" data-mode="fill" />
              </svg>
            </span>
          </button>
          <div className="_currency-card">
            <div className="_dropdown _currency-select" aria-expanded="false" aria-controls="v-7" role="button">
              <button data-expanded="false" className="flex items-center justify-between gap-32 br-16">
                <div className="background absolute inset-0 br-inherit" />
                <div className="label relative flex gap-8 items-center">
                  <img className="currency-icon" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20height='24'%20width='24'%3e%3cpath%20fill='%23F0F0F0'%20d='M12%2024C18.6274%2024%2024%2018.6274%2024%2012C24%205.37258%2018.6274%200%2012%200C5.37258%200%200%205.37258%200%2012C0%2018.6274%205.37258%2024%2012%2024Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M2.47983%204.6944C1.53722%205.92079%200.826457%207.3343%200.412598%208.86988H6.65532L2.47983%204.6944Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M23.5849%208.86941C23.1711%207.33388%2022.4602%205.92036%2021.5177%204.69397L17.3423%208.86941H23.5849Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M0.412598%2015.1306C0.826504%2016.6661%201.53727%2018.0796%202.47983%2019.3059L6.65518%2015.1306H0.412598Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M19.3039%202.48067C18.0775%201.53806%2016.664%200.827297%2015.1284%200.413391V6.65606L19.3039%202.48067Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M4.69287%2021.5193C5.91926%2022.4619%207.33278%2023.1727%208.86831%2023.5866V17.344L4.69287%2021.5193Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M8.86826%200.413391C7.33273%200.827297%205.91921%201.53806%204.69287%202.48063L8.86826%206.65602V0.413391Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M15.1294%2023.5866C16.6649%2023.1727%2018.0784%2022.4619%2019.3048%2021.5194L15.1294%2017.344V23.5866Z'%3e%3c/path%3e%3cpath%20fill='%230052B4'%20d='M17.3423%2015.1306L21.5177%2019.306C22.4602%2018.0796%2023.1711%2016.6661%2023.5849%2015.1306H17.3423Z'%3e%3c/path%3e%3cpath%20fill='%23D80027'%20d='M23.8984%2010.4348H13.5653H13.5652V0.101578C13.0529%200.034875%2012.5305%200%2012%200C11.4694%200%2010.9471%200.034875%2010.4348%200.101578V10.4347V10.4348H0.101578C0.034875%2010.9471%200%2011.4695%200%2012C0%2012.5306%200.034875%2013.0529%200.101578%2013.5652H10.4347H10.4348V23.8984C10.9471%2023.9651%2011.4694%2024%2012%2024C12.5305%2024%2013.0529%2023.9652%2013.5652%2023.8984V13.5653V13.5652H23.8984C23.9651%2013.0529%2024%2012.5306%2024%2012C24%2011.4695%2023.9651%2010.9471%2023.8984%2010.4348Z'%3e%3c/path%3e%3cpath%20fill='%23D80027'%20d='M15.1313%2015.1304L20.4862%2020.4852C20.7324%2020.239%2020.9674%2019.9816%2021.1915%2019.7148L16.6071%2015.1303H15.1313V15.1304Z'%3e%3c/path%3e%3cpath%20fill='%23D80027'%20d='M8.86901%2015.1303H8.86892L3.51416%2020.4851C3.76035%2020.7314%204.01774%2020.9663%204.28455%2021.1904L8.86901%2016.6059V15.1303Z'%3e%3c/path%3e%3cpath%20fill='%23D80027'%20d='M8.86927%208.86979V8.86969L3.51446%203.51483C3.26818%203.76102%203.03324%204.01841%202.80908%204.28522L7.3936%208.86974H8.86927V8.86979Z'%3e%3c/path%3e%3cpath%20fill='%23D80027'%20d='M15.1313%208.8695L20.4862%203.51459C20.24%203.26831%2019.9826%203.03337%2019.7158%202.80927L15.1313%207.39378V8.8695V8.8695Z'%3e%3c/path%3e%3c/svg%3e" alt="selected currency icon" />
                  <span className="body -book uppercase">
                    GBP
                  </span>
                </div>
                <SpanBlock2 className="_icon chevron br-full" />
              </button>
              <div id="v-7" className="overlay-container absolute mt-10">
                <div className="overlay" data-lenis-prevent="" />
                <div className="overlay-fade absolute inset-0" inert />
              </div>
            </div>
            <div className="slot subhead-2 -medium color-orange-900">
              <div className="flex gap-4 items-center">
                <span />
                <span>
                  8,58
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-120-64" />
    </section>
  );
}
