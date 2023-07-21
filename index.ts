import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";

const config = new pulumi.Config();
const pwLength = config.requireNumber("pwLength");

const pw = new random.RandomPassword("pw", {
    length: pwLength
})