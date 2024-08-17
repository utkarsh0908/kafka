import kafka from "./client.js";

// Create a consumer instance
const consumer = kafka.consumer({ groupId: 'test-group' }); // Replace with your consumer group ID

const run = async () => {
  // Connect the consumer to Kafka
  await consumer.connect();
  console.log('Kafka Consumer connected successfully.');

  // Subscribe to the topic
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true }); // Replace with your Kafka topic

  // Run the consumer to listen for messages
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(), // Message content
      });
    },
  });
};

run().catch(console.error);
