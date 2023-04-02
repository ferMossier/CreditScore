import AWS from "aws-sdk";
import SageMakerRuntime from "aws-sdk/clients/sagemakerruntime";

export const Inference = async (features) => {
  AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_KEY,
    region: "sa-east-1",
  });

  const sagemaker = new SageMakerRuntime();

  const body = {
    instances: [
      {
        features: features,
      },
    ],
  };

  try {
    const respuesta = await sagemaker
      .invokeEndpoint({
        EndpointName: "linear-learner-2023-04-02-17-31-51-186",
        ContentType: "application/json",
        Body: JSON.stringify(body),
      })
      .promise();
    console.log(features);
    return respuesta.Body.toString("utf-8");
  } catch (error) {
    console.log("ERRORRRR", error);
  }
};
