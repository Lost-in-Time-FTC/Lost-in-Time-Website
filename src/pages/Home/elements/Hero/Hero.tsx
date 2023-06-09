/*
Copyright 2023-present 4324 Lost in Time

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__container">
        <TypeAnimation
          sequence={["4324 Lost in Time"]}
          wrapper="span"
          cursor={true}
          style={{
            color: "#ffffff",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            textAlign: "center",
          }}
        />
        {/* <div className="Hero__button-container">
                    <a className="Hero__button" href="/">
                        About Our FTC Team →
                    </a>
                </div> */}
      </div>
    </div>
  );
}
