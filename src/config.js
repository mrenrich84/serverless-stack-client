export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51H6NaCBZnQ8JwRmLzXwip0l9mqz9NnIXTppciurMUrrDP9PvsjICBdsvQa0yRQZbpzEUxIStuevDrEmeCTJxQHud002iWgi9TB",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-upload-34sadf47xg"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://7h14p86db6.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_WLkCom1Oz",
        APP_CLIENT_ID: "2ghet9g653o4u3m46g4vi8mqfu",
        IDENTITY_POOL_ID: "us-east-1:12f5fb0e-9a97-4ec9-a74c-1f2c66be1f4d"
    }
};