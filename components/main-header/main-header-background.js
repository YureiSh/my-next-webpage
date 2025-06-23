import classes from './main-header-background.module.css'

export default function MainHeaderBackground() {
  return (
    <div className={classes["header-background"]}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#59453c', stopOpacity: '1' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,218.7C840,235,960,245,1080,218.7C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />

      </svg>
    </div>
  );
};