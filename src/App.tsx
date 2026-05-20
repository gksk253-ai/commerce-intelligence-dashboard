import { useEffect, useState } from "react";

function App() {
  const defaultData = [
    {
      id: 1,

      company: "늘봄아로마",

      place: "전주 ○○초등학교",

      address: "전북 전주시 완산구 ○○로 12",

      date: "2026-05-20",

      time: "14:00",

      people: 40,

      className: "디퓨저 만들기",

      programName: "감정 아로마 디퓨저 클래스",

      pricePerPerson: 12000,

      instructorFee: 300000,

      assistantFee: true,

      manager: "김○○ 선생님",

      phone: "010-1234-5678",

      email: "teacher@example.com",

      documents: "사업자등록증, 통장사본",

      materials: [
        {
          name: "디퓨저 용액",
          checked: false,
        },

        {
          name: "디퓨저 용기",
          checked: false,
        },

        {
          name: "스틱",
          checked: false,
        },
      ],

      memo: "지난 만족도 매우 높음",
    },
  ];

  const [classList, setClassList] =
    useState<any[]>([]);

  const [selectedClass, setSelectedClass] =
    useState<any>(null);

  // 새 출강 입력값
  const [company, setCompany] =
    useState("");

  const [place, setPlace] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const [people, setPeople] =
    useState("");

  const [className, setClassName] =
    useState("");

  const [programName, setProgramName] =
    useState("");

  const [pricePerPerson, setPricePerPerson] =
    useState("");

  const [instructorFee, setInstructorFee] =
    useState("");

  const [assistantFee, setAssistantFee] =
    useState("없음");

  const [manager, setManager] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [documents, setDocuments] =
    useState("");

  const [memo, setMemo] =
    useState("");

  // 저장 데이터 불러오기
  useEffect(() => {
    const saved =
      localStorage.getItem("classData");

    if (saved) {
      setClassList(JSON.parse(saved));
    } else {
      setClassList(defaultData);
    }
  }, []);

  // 자동 저장
  useEffect(() => {
    localStorage.setItem(
      "classData",
      JSON.stringify(classList)
    );
  }, [classList]);

  // 출강 추가
  const addClass = () => {
    if (
      !place ||
      !date ||
      !people ||
      !className
    ) {
      alert("필수 항목을 입력해주세요");

      return;
    }

    const newClass = {
      id: Date.now(),

      company,

      place,

      address,

      date,

      time,

      people,

      className,

      programName,

      pricePerPerson,

      instructorFee,

      assistantFee:
        assistantFee === "있음",

      manager,

      phone,

      email,

      documents,

      materials: [
        {
          name: "재료 준비 필요",
          checked: false,
        },
      ],

      memo,
    };

    setClassList([
      ...classList,
      newClass,
    ]);

    // 입력 초기화
    setCompany("");
    setPlace("");
    setAddress("");
    setDate("");
    setTime("");
    setPeople("");
    setClassName("");
    setProgramName("");
    setPricePerPerson("");
    setInstructorFee("");
    setAssistantFee("없음");
    setManager("");
    setPhone("");
    setEmail("");
    setDocuments("");
    setMemo("");
  };

  // 준비물 체크
  const toggleMaterial = (
    classId: number,
    materialIndex: number
  ) => {
    const updatedList =
      classList.map((item) => {
        if (item.id === classId) {
          return {
            ...item,

            materials:
              item.materials.map(
                (
                  material: any,
                  index: number
                ) => {
                  if (
                    index === materialIndex
                  ) {
                    return {
                      ...material,

                      checked:
                        !material.checked,
                    };
                  }

                  return material;
                }
              ),
          };
        }

        return item;
      });

    setClassList(updatedList);

    const found =
      updatedList.find(
        (item) => item.id === classId
      );

    setSelectedClass(found);
  };

  // 상세 수정
  const updateField = (
    field: string,
    value: any
  ) => {
    const updatedList =
      classList.map((item) => {
        if (
          item.id === selectedClass.id
        ) {
          return {
            ...item,

            [field]: value,
          };
        }

        return item;
      });

    setClassList(updatedList);

    const found =
      updatedList.find(
        (item) =>
          item.id === selectedClass.id
      );

    setSelectedClass(found);
  };

  return (
    <div
      style={{
        padding: "30px",

        fontFamily: "sans-serif",
      }}
    >
      <h1>출강 관리 시스템</h1>

      {/* 새 출강 추가 */}
      <div
        style={{
          border: "1px solid #ddd",

          padding: "20px",

          borderRadius: "10px",

          marginBottom: "40px",
        }}
      >
        <h2>새 출강 추가</h2>

        <input
          placeholder="회사명"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="기관명"
          value={place}
          onChange={(e) =>
            setPlace(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="주소"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="시간"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="참여 인원"
          value={people}
          onChange={(e) =>
            setPeople(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="수업 종류"
          value={className}
          onChange={(e) =>
            setClassName(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="출강 프로그램명"
          value={programName}
          onChange={(e) =>
            setProgramName(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="1인당 금액"
          value={pricePerPerson}
          onChange={(e) =>
            setPricePerPerson(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="강사비"
          value={instructorFee}
          onChange={(e) =>
            setInstructorFee(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <select
          value={assistantFee}
          onChange={(e) =>
            setAssistantFee(
              e.target.value
            )
          }
          style={inputStyle}
        >
          <option>없음</option>

          <option>있음</option>
        </select>

        <input
          placeholder="담당자"
          value={manager}
          onChange={(e) =>
            setManager(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="전화번호"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="이메일"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="요청 서류"
          value={documents}
          onChange={(e) =>
            setDocuments(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <textarea
          placeholder="메모"
          value={memo}
          onChange={(e) =>
            setMemo(e.target.value)
          }
          rows={4}
          style={{
            ...inputStyle,

            width: "300px",
          }}
        />

        <button
          onClick={addClass}
          style={{
            padding: "12px 20px",

            backgroundColor: "black",

            color: "white",

            border: "none",

            borderRadius: "8px",

            cursor: "pointer",
          }}
        >
          출강 추가하기
        </button>
      </div>

      {/* 출강 목록 */}
      <div>
        <h2>출강 목록</h2>

        {classList.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              setSelectedClass(item)
            }
            style={{
              border: "1px solid #ddd",

              padding: "20px",

              borderRadius: "10px",

              marginBottom: "20px",

              cursor: "pointer",
            }}
          >
            <p>
              <strong>기관명:</strong>{" "}
              {item.place}
            </p>

            <p>
              <strong>날짜:</strong>{" "}
              {item.date}
            </p>

            <p>
              <strong>참여 인원:</strong>{" "}
              {item.people}명
            </p>

            <p>
              <strong>수업:</strong>{" "}
              {item.className}
            </p>
          </div>
        ))}
      </div>

      {/* 상세 페이지 */}
      {selectedClass && (
        <div
          style={{
            marginTop: "40px",

            border: "2px solid black",

            padding: "25px",

            borderRadius: "10px",

            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>출강 상세 정보</h2>

          {[
            "company",
            "place",
            "address",
            "date",
            "time",
            "people",
            "className",
            "programName",
            "pricePerPerson",
            "instructorFee",
            "manager",
            "phone",
            "email",
            "documents",
          ].map((field) => (
            <div
              key={field}
              style={{
                marginBottom: "15px",
              }}
            >
              <strong>{field}</strong>

              <br />

              <input
                value={
                  selectedClass[field]
                }
                onChange={(e) =>
                  updateField(
                    field,
                    e.target.value
                  )
                }
                style={{
                  width: "100%",

                  padding: "10px",
                }}
              />
            </div>
          ))}

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <strong>
              보조강사 여부
            </strong>

            <br />

            <select
              value={
                selectedClass.assistantFee
                  ? "있음"
                  : "없음"
              }
              onChange={(e) =>
                updateField(
                  "assistantFee",
                  e.target.value ===
                    "있음"
                )
              }
            >
              <option>없음</option>

              <option>있음</option>
            </select>
          </div>

          {/* 준비물 */}
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <strong>
              준비물 체크
            </strong>

            <ul>
              {selectedClass.materials.map(
                (
                  material: any,
                  index: number
                ) => (
                  <li
                    key={index}
                    onClick={() =>
                      toggleMaterial(
                        selectedClass.id,
                        index
                      )
                    }
                    style={{
                      cursor: "pointer",

                      marginBottom:
                        "10px",
                    }}
                  >
                    {material.checked
                      ? "☑"
                      : "☐"}{" "}
                    {material.name}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 메모 */}
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <strong>메모</strong>

            <textarea
              value={
                selectedClass.memo
              }
              onChange={(e) =>
                updateField(
                  "memo",
                  e.target.value
                )
              }
              rows={5}
              style={{
                width: "100%",

                padding: "10px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "10px",

  width: "300px",

  marginBottom: "10px",

  display: "block" as const,
};

export default App;