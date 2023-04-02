import AWS from "aws-sdk";
import SageMakerRuntime from "aws-sdk/clients/sagemakerruntime";

export const Inference = async (features) => {
  AWS.config.update({
    accessKeyId: "AKIAZ2OXW5ABALSW7HIR",
    secretAccessKey: "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",
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
        EndpointName: "linear-learner-2023-03-25-19-51-44-328",
        ContentType: "application/json",
        Body: JSON.stringify(body),
      })
      .promise();
    console.log(features);
    return respuesta.Body.toString("utf-8");
  } catch (error) {
    console.log(error);
  }
};
