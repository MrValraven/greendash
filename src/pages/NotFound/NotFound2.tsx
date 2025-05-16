import React from 'react';
import './NotFound2.css';

const NotFound2 = () => {
  return (
    <div className='not-found'>
      <div className='not-found__container'>
        <div className='not-found__content'>
          <div className='not-found__icon-wrapper'>
            <div className='not-found__icon-stack'>
              <svg className='not-found__icon' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
                  fill='currentColor'
                />
              </svg>
              <svg className='not-found__icon-ping' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
                  fill='currentColor'
                />
              </svg>
              <div className='not-found__icon-star'>
                <svg className='not-found__star' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M12 3L14.94 8.34L21 9.27L16.5 13.33L17.88 19.5L12 16.25L6.12 19.5L7.5 13.33L3 9.27L9.06 8.34L12 3Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className='not-found__title'>
            <span className='not-found__digit not-found__digit--bounce'>4</span>
            <span className='not-found__digit not-found__digit--pulse'>0</span>
            <span className='not-found__digit not-found__digit--bounce'>4</span>
          </h1>
          <h2 className='not-found__subtitle'>Oops! We Can't Find That Page</h2>
          <p className='not-found__description'>
            Just like sustainable practices, good navigation is essential. The page you're looking
            for might have been moved, deleted, or is temporarily unavailable.
          </p>
          <div className='not-found__actions'>
            <button className='not-found__button not-found__button--primary'>
              <span className='material-symbols-outlined not-found__icon-home'>home</span>
              Return Home
            </button>
            <button className='not-found__button not-found__button--outline'>
              <span className='material-symbols-outlined not-found__icon-support'>
                support_agent
              </span>
              Contact Support
            </button>
          </div>
        </div>

        <div className='not-found__solutions'>
          <h3 className='not-found__solutions-title'>
            While you're here, explore our sustainability solutions:
          </h3>
          <div className='not-found__solutions-grid'>
            <div className='not-found__solution'>
              <div className='not-found__solution-icon-wrapper'>
                <span className='material-symbols-outlined'>assignment</span>
              </div>
              <h4 className='not-found__solution-title'>ESG Reporting</h4>
              <p className='not-found__solution-text'>
                Automate your environmental, social, and governance reports with our AI-powered
                tools.
              </p>
            </div>
            <div className='not-found__solution'>
              <div className='not-found__solution-icon-wrapper'>
                <span className='material-symbols-outlined'>analytics</span>
              </div>
              <h4 className='not-found__solution-title'>Carbon Tracking</h4>
              <p className='not-found__solution-text'>
                Monitor and reduce your carbon footprint with real-time analytics and actionable
                insights.
              </p>
            </div>
            <div className='not-found__solution'>
              <div className='not-found__solution-icon-wrapper'>
                <span className='material-symbols-outlined'>trending_up</span>
              </div>
              <h4 className='not-found__solution-title'>Impact Metrics</h4>
              <p className='not-found__solution-text'>
                Showcase your sustainability achievements with beautiful visualizations and reports.
              </p>
            </div>
          </div>
        </div>

        <div className='not-found__carousel'>
          <h3 className='not-found__carousel-title'>
            <span className='material-symbols-outlined'>eco</span>
            Sustainability Tips Carousel
          </h3>
          <div className='not-found__carousel-wrapper'>
            <div className='not-found__carousel-inner'>
              <div className='not-found__tip-card not-found__tip-card--water'>
                <div className='not-found__tip-card-header'>
                  <span className='material-symbols-outlined'>water_drop</span>
                  <span className='not-found__tag'>Water</span>
                </div>
                <h4 className='not-found__tip-title'>Water Conservation</h4>
                <p className='not-found__tip-text'>
                  Install low-flow fixtures in your workplace to reduce water consumption by up to
                  30%.
                </p>
                <div className='not-found__tip-footer'>
                  <span className='not-found__tip-index'>Tip #1 of 12</span>
                  <button className='not-found__bookmark'>
                    <span className='material-symbols-outlined'>bookmark_add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound2;
