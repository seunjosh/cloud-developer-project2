export const config = {
  "dev": {
   
    "username": process.env.POSTGREESS_USERNAME,
    "password": process.env.POSTGREESS_PASSWORD,
    "database": process.env.POSTGREESS_DATABASE,
    "host": process.env.POSTGREESS_HOST,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
  "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
  
    "dialect": "postgres"
  
  },
  "jwt": {
    "secret": "jhygfrdyttffcc"
  }
  
  
  }
  
