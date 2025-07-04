from pydantic import BaseModel
from typing import Optional

class CodeSubmission(BaseModel):
    language: str
    question_title: str
    code: str

class CodeFeedback(BaseModel):
    pass_status: bool
    readability_score: Optional[int]
    efficiency_score: Optional[int]
    suggestions: Optional[list[str]]
    errors: Optional[list[str]]
    corrected_code: Optional[str]
    raw_ai_feedback: str
    similarity_score: Optional[float] = None
    is_similar_to_sample: Optional[bool] = None


class SampleAnswerCreate(BaseModel):
    question_title: str
    language: str
    ideal_code: str
