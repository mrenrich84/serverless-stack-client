const REGION = "us-east-1";

const STRIPE_KEY = "pk_test_51H6NaCBZnQ8JwRmLzXwip0l9mqz9NnIXTppciurMUrrDP9PvsjICBdsvQa0yRQZbpzEUxIStuevDrEmeCTJxQHud002iWgi9TB";

const dev = {
    STRIPE_KEY,
    s3: {
        REGION,
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-1tjerx3n9wgtg"
    },
    apiGateway: {
        REGION,
        URL: "https://x6dhxxhcbd.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION,
        USER_POOL_ID: "us-east-1_UdrgwpR8B",
        APP_CLIENT_ID: "5f6k9t4g3ni339cbgko57uf98e",
        IDENTITY_POOL_ID: "us-east-1:a623321b-dfae-4976-ba85-2ef45e361d04"
    }
};

const prod = {
    STRIPE_KEY,
    s3: {
        REGION,
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-ecwyjwz16k0y"
    },
    apiGateway: {
        REGION,
        URL: "https://rxv1gwvz5d.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION,
        USER_POOL_ID: "us-east-1_7WrUPk2Jl",
        APP_CLIENT_ID: "44uvfavpv033k0u5rfrl57hkta",
        IDENTITY_POOL_ID: "us-east-1:c911e990-33ca-4c58-b956-47197e2e13f2"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};