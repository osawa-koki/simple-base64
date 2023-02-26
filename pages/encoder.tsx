import React, { useState } from "react";

import { Button, Alert, Form } from 'react-bootstrap';
import Layout from "../components/Layout";

export default function EncoderPage() {

  const [text, setText] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const Encode = () => {
    if (text === null) {
      return;
    }
    const encoded = Buffer.from(text).toString('base64');
    setResult(encoded);
  };

  return (
    <Layout>
      <div id="Encoder">
        <h1>BASE64 Encoder</h1>
        <p>データをBASE64形式に変換します。</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>変換するデータ</Form.Label>
            <Form.Control as="textarea" rows={7} onInput={(e) => {setResult(null); setText((e.target as HTMLTextAreaElement).value)}} />
          </Form.Group>
          <Button variant="primary" onClick={Encode}>
            変換
          </Button>
        </Form>
        {
          result !== null && (
            <>
              <hr />
              <Form className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>BASE64エンコードされたデータ</Form.Label>
                  <Form.Control as="textarea" rows={7} value={result} readOnly />
                </Form.Group>
                <Button variant="success">
                  コピー
                </Button>
              </Form>
            </>
          )
        }
      </div>
    </Layout>
  );
};
