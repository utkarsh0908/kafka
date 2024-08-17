import kafka from './client.js';

async function init() {
  const producer = kafka.producer();

  console.log('Connecting producer to Kafka');
  await producer.connect();
  console.log('Connected producer to Kafka');

  await producer.send({
    topic: 'testing',
    messages: [
      { key: 'location-update', value: JSON.stringify({ name: 'Tony Stark', loc: 'Hyderabad' }) },
      { key: 'location-update', value: JSON.stringify({ name: 'Utkarsh', loc: 'Hyderabad' }) }
    ]
  })

  await producer.disconnect();
}

init();