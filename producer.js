import kafka from "./client.js";
// Create a producer instance
const producer = kafka.producer();

const run = async () => {
  // Connect the producer to Kafka
  await producer.connect();
  console.log('Kafka Producer connected successfully.');

  // Send a message to the Kafka topic
  const result = await producer.send({
    topic: 'test-topic', // Replace with your Kafka topic
    messages: [
      { key: '1', value: JSON.stringify({ name: 'Tony Stark', loc: 'Hyderabad' }) }, // Replace with your message(s)
    ],
  });

  console.log('Message sent successfully:', result);

  // Disconnect the producer after sending the message
  await producer.disconnect();
};

run().catch(console.error);
